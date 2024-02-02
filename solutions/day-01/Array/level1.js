// 1
const negara = Array();
// 2
const matkul = ['Machine Learning', 'Natural Language Processing', 'Web Development', 'Data Science', 'Database', 'Algorithm'];
// 3
console.log(`${matkul.length()}`);
// 4
console.log(`${matkul[0]}`);
let lastIndex = matkul.length() - 1;
console.log(`${matkul[lastIndex]}`);
// 5
const mixedDataTypes = [
    'Machine Learning',
    3,
    true,
    9.0,
    {
        'algoritma' : 'Naive Bayes',
        'kasus'     : 'klasifikasi'
    },
    20
];

// 6
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// 7
console.log(itCompanies);
// 8
console.log(`${itCompanies.length()}`);
// 9
console.log(`${itCompanies[0]}`);
console.log(`${itCompanies[Math.floor(itCompanies.length/2)]}`);
console.log(`${itCompanies[itCompanies.length - 1]}`);
// 10
console.log('All Companies');
itCompanies.forEach( company => console.log(company));
// 11
itCompanies = itCompanies.map(company => {
    console.log(company.toUpperCase());
    return company.toUpperCase();
});
// 12
console.log(itCompanies.join(', ' + ' are big IT companies.'));
// 13
const companyName = 'Microsoft';
if(itCompanies.includes(companyName)){
    console.log(`${companyName} is found in the array.`)
}else{
    console.log(`${companyName} is not found in the array.`)
}
// 14
const filteredCompanies = itCompanies.filter(company => company.toLowerCase().split('o').length - 1 === 1);
console.log(`Companies with one "o": ${filteredCompanies}`);
// 15
itCompanies.sort();
console.log(`sorted array : ${itCompanies}`)
// 16
itCompanies.reverse();
console.log(`reversed array : ${itCompanies}`)
// 17
const firstThreeCompanies = itCompanies.slice(0,3);
console.log(`First Three Companies : ${firstThreeCompanies}`)
// 18
const lastThreeCompanies = itCompanies.slice(-3);
console.log(`Last Three Companies : ${lastThreeCompanies}`)
// 19
const middleIndex = Math.floor(itCompanies.length / 2);
const middleCompanies = itCompanies.slice(middleIndex, middleIndex + 1);
console.log(`Middle company: ${middleCompanies}`);
// 20
itCompanies.shift();
console.log(`array after first company deteted : ${itCompanies}`);
// 21
itCompanies.splice(middleIndex, 1);
console.log(`array after middle company deteted : ${itCompanies}`);
// 22
itCompanies.pop();
console.log(`array after last company deteted : ${itCompanies}`);
// 23
itCompanies = [];
console.loh(`array after all companies deleted ${itCompanies}`)
