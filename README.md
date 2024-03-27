# Bambucod app made with nextjs and Springboot

# Group 04 collaborators:
- Raquel Sofia Neira
- Edwin Rojas
- Ruben Duarte
## Peaku cohort-11 project

- 💻 Experience in HTML5, CSS3, tailwindCSS, React, SpringBoot, Postgresql 
- 🎨 coding challenges app for Javascript

## Getting Started

## 1. Clone the repository and install dependencies
```
git clone https://github.com/ruben-duarte/BambucodFrontend.git
cd BambucodFrontend
npm install
```
## 2. Configure your local environment
- Copy the .env.local.example file in this directory to .env.local (which will be ignored by Git):
```
.env.local
```
## 3. Run your postgresql 
## 4. Start the application
```
npm run dev
```
you can use this coding solutions boilerplate, to test the two-sum and valid-parentheses execercises:
Two-sum => Boilerplate
```
const hashTable = {};

for(let i=0; i<nums.length; i++){
	let value = target - nums[i]
	if(!(value in hashTable)){
		hashTable[nums[i]]=i
	} else{
		return [hashTable[value],i]
	}
}
```
valid-parentheses => Boilerplate
```
while (
          s.indexOf('()') !== -1 ||
          s.indexOf('{}') !== -1 ||
          s.indexOf('[]') !== -1
      ) {

          s = s
              .replace('()', '')
              .replace('{}', '')
              .replace('[]', '');
      }
  
      return !s.length;
```

https://github.com/ruben-duarte/BambucodFrontend/assets/107430911/cf5da03b-02dd-45e8-b547-129de1cb7a5a

Check it out!

https://github.com/ruben-duarte/BambucodFrontend/assets/107430911/d855c2a5-9c45-488b-a750-762589e01719












