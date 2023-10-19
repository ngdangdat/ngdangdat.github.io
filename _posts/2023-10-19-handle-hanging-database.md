---
title: "Handle hanging MySQL database"
---

Today, while our system was applying new migration automatically, it was hanging unexpectedly. There was no error bugging in our SNS channels (posted by Sentry). I thought it was another random issue happening while migrating. I moved the migration head forward manually and restart the migration process so that it will skip the problematic one.

It seemed proceeding probably afterwards. However, when one of our developers tried to query data from one of migrated table, his requests got timeout response by the API. This is abnormal. If there's an issue in data schema, error should be arised in SNS channel and I can apply queries manually to add missing columns.

High chance that the issue is in the database. I tried executing query to the problematic directly. It was hanging until MySQL connection threw exception as well. It was a development environment so I didn't hesitate to start the process of kill problematic processes.

```sql
SELECT 
    GROUP_CONCAT(CONCAT('KILL ', id, ';')
        SEPARATOR ' ') 'Paste the following query to kill all processes'
FROM
    information_schema.processlist
WHERE
    DB = 'xxx'
        AND ID NOT IN (3107330 , 3107235);
```

I executed kill queries and stopped worker process (application layer) that intervally executes checks/tasks require querying to the database. And the query still hung...

Then I check InnoDB locks.

```sql
USE INFORMATION_SCHEMA;
SELECT INNODB_LOCKS.* 
FROM INNODB_LOCKS
JOIN INNODB_LOCK_WAITS
  ON (INNODB_LOCKS.LOCK_TRX_ID = INNODB_LOCK_WAITS.BLOCKING_TRX_ID);
```

Although I'm pretty sure I terminated all the processes running against the target table/database but the result still showed a lot of processes locking the table.

Kill those processes using process ID and migration queries started to work (finished in less than 5 seconds).
