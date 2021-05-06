# String Calculator Kata by Roy Osherove in JavaScript with Jest

For this assignemnt, we will be using Jest.

### Instructions

- Clone the repo

- `cd` into the repo

- Run `npm install` or `yarn install`

  - this will install the dependencies listed in `package.json` (for this
    assignment, it's only `jest`)

- To run the tests, run `npm test` in your terminal.

  - Inside `package.json`, we have defined `npm test` to execute the `jest`
    command, which will run all the tests in the project.

  - We have also defined 2 additional commands:

    - `npm run test:watch`, which is executing the `jest --watch` command.
      The `--watch` option will rerun the tests everytime you save a file.

    - `npm run test:coverage`, which is executing the `jest --coverage`
      command. The `--coverage` option produces a test coverage report
      after running the tests

- To quit the test runner, hit `q` in the terminal where `jest` is running.

## EXERCICE

Write a method `add` under an object Calculator that, given a delimited string, returns the sum of the numbers in the string.

1. An empty string returns zero `'' => 0`
2. A single number returns the value `'1' => 1` `'2' => 2`
3. Two numbers, comma delimited, returns the sum `'1,2' => 3` `'10,20' => 30`
4. Two numbers, newline delimited, returns the sum `'1\n2' => 3`
5. Three numbers, delimited either way, returns the sum `'1\n2,3\n4' => 10`
