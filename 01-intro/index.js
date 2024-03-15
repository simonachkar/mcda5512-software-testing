const validateName = require("./validateName");

const nameToValidate = process.argv[2];
const response = validateName(nameToValidate);

if (response) {
  console.log(`✅ The name "${nameToValidate}" is valid.`);
} else {
  console.log(`❌ The name "${nameToValidate}" is NOT valid.`);
}
