const config = { theme: 'dark', layout: 'grid' };
const {layout,...rest} = config
console.log(config)
const newCO = {list:layout,...rest }
console.log(newCO)