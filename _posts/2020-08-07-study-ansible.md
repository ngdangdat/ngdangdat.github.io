# redhat video explains Ansible for beginner
Resource: [https://www.ansible.com/resources/videos/quick-start-video](https://www.ansible.com/resources/videos/quick-start-video)

## About Ansible
- Features: Simple, powerful and agentless
- Ansible architecture is straightfoward
- Playbooks in short:
  - YAML files describe state of something
  - Human & machine readable
  - Can be used to start the environment for an application
- Terms:
  - Variable
  - Inventory: declaring servers, range, custom things, dynamic lists of servers (AWS, Azure, GCP,...)

```yaml
# Example for inventory
---
[web]
web-1.example.com
web-2.example.com
[db]
db-a.example.com
db-b.example.com
```
- More details on playbooks:
  - Playbooks [contain] **plays**
  - Plays [contain] **tasks**
  - Tasks
    - [call] **modules**
    - [run] **sequentially**
  - **Handlers** are triggered by tasks and are run once, at the end of plays

- Modules and other advance stuffs
- Dry-run mode for ad-hoc commands and Playbooks
- Validate playbook runs before making state changes on target systems

## Ansible Tower
- Additional features: Control, knowledge and delegation.

> Ansible Tower takes automation to the next level

## Galaxy
- Source of community and vendor-provided Ansible Roles to help you get started faster.
- **Learn from others**

# Ansible concepts
Resource: [https://docs.ansible.com/ansible/latest/user_guide/basic_concepts.html](https://docs.ansible.com/ansible/latest/user_guide/basic_concepts.html)

- Control node
- Managed nodes
- Inventory
- Modules
- Tasks
- Playbooks

## Control node
- Any machine with Ansible installed
- Requires Python to be installed
- **Can't** use a Windows machine as a control node
- Can have multiple control nodes

## Managed nodes
- Network devices/servers managed with Ansible
- Ansible is not installed on managed nodes

## Inventory
- A list of managed nodes, sometimes called **"hostfile"**
- Specifies information like IP address for each managed node
- Allows organizing managed nodes, creating and nesting groups for easier scaling

## Modules
> The units of code Ansible executes

- Each module has a particular use: from administering users on a specific type of DB to managing VLAN interfaces on a specific type of network device
- There are many modules Ansible includes

## Tasks
- The units of action in Ansible

## Playbooks
- Ordered lists of tasks
- Can be run repeatedly
- Playbooks can include variables/tasks
- Written in YAML (for the sake of readability)

# ad-hoc commands
- Great for tasks repeated rarely. E.g: turn off all the machines in a lab for a vacation with **only a quick one-liner in Ansible without writing a playbook**.

```sh
ansible [pattern] -m [module] -a "[module options]"
```

