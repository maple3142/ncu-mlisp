# Mini-LISP

> NCU 2021 Compiler Final Project

For detailed description of this simplified lisp variant, see [proj_desc](proj_desc).

## Environment

* node.js v16.6.0
* yarn 1.22.11

## Running

```zsh
yarn build  # build essential files
yarn mlisp < input_file.lsp  # run input_file.lsp
node dist/index.js < input_file.lsp  # same as above
```

## Running with Docker

```zsh
docker build . -t mlisp  # build image
docker run --rm -i mlisp < input_file.lsp  # run input_file.lsp
```
