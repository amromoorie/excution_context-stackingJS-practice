// JS behind the scenes

// whenever a functions get called
// it creates an Excution AudioContext

// which can be simply represented as:

let excution_context = {
    'VO': 'here all vars, functions & args get assigned',
    'scope_chain':'VO + global objs & local/function scope or any scope created',
    'this':  'the value of this'
}

// the excution context comprising of 2 things: Creation phase & Excution phase

// 1. on the left side i.e. the excution context obj properties is comprising of 
// three things: the variable obj containing all vars, functions & args, the scope 
// containing the global scope & local/function scope or any scope created and finally 
// the (this) that contains the current context of a certain scope and can be assigned 
// manually using call method

// 2. the Excution Phases is the process of asseigning values or making references to functions
// and excuting code hence the name

console.log('variable obj', excution_context['VO'])
console.log('scope chain', excution_context['scope_chain'])
console.log('this', excution_context['this'])

// Stacking

function factorial(x) {
  if (x === 1) {
    console.log(x)
      return 1;
  } else {
    console.log(x)
      return x * factorial(x-1);
    }
}

factorial(10)

// in javascript, when functions get called, it stacked one on top of the other and 
// when finished the the outermost fn on the top > get returned first 
// SO THAT 1 returned first then 2, and 3... etc
