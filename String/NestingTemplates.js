let classes = 'header';

const isLargeScreen = () => {
    return false
}

const item = {
    isCollapsed: false
}


// ===========================================================
// ====> without template literals, if you wanted to return a certain value based on a particular condition, you could do something like the following:

classes += (isLargeScreen() ? '' : item.isCollapsed ?
    ' icon-expander' : ' icon-collapser');

console.log(classes)

// ====> With a template literal but without nesting, you could do this:

const newclasses = `header ${ isLargeScreen() ? '':(item.isCollapsed ? 'icon-expander' : 'icon-collapser') }`;

console.log(newclasses)


// ====> With nesting of template literals, you can do this:

const classes2 = `header ${ isLargeScreen() ? '' :
  `icon-${item.isCollapsed ? 'expander' : 'collapser'}` }`;

console.log(classes2)