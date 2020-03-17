# pudding-cli

## Install

```bash
npm i @oncoding/pudding -g
```

## Add Bash Completion

get completion script using command below, and do sth it shows u!

```bash
pudding completion
```

## Usage

### new project

```bash
$ pudding project new hellocli

☐  pending   拷贝工程模板到/Users/nemo/code/imnemo/hellocli
☐  pending   生成新工程package.json
✔  success   hellocli新建成功!
●  note      请执行后续命令:

    cd hellocli
    npm i. - g
    hellocli completion
```

### dev new cli

```
cd hellocli

# install for dev
npm i . -g

# then you can use hellocli now
# add bash compeltion
hellocli completion

# show some examples
hello example -h

# new a command combo
pudding command new combo --combo

# new a command not combo
pudding command new --path command bar
```

### api

#### logger

[signale](https://github.com/klaussinani/signale) is used. All commands will show all debug infos with the param `-e local`, and will only show `warn, error, fatal` infos by default.

```
hello example echo -e local
hello example echo
```