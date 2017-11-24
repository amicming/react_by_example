This is the `props-example` react example by [Create React App](https://github.com/facebookincubator/create-react-app).

- create-react-app props-example

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
    manifest.json
  src/
    components/
      App.js
    index.js
```

- In `index.js`, I passed personName as a props example of `<App personName='Vasistha' />`
and in `components\App.js`, I added `{this.props.personName}!` to access props.


- [Demo Link](https://codepen.io/amicming/pen/dZKMBO)
