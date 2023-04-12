const companies=[
  {name:"Company One",category:"finance",start:"1981",end:"2003"},
  {name:"Company Two",category:"Retail",start:"1992",end:"2008"},
  {name:"Company Three",category:"Auto",start:"1999",end:"2007"},
  {name:"Company Four",category:"Retail",start:"1989",end:"2010"},
  {name:"Company Five",category:"Technology",start:"2009",end:"2014"},
  {name:"Company Six",category:"Finance",start:"1987",end:"2010"},
  {name:"Company Seven",category:"Auto",start:"1986",end:"1996"},
  {name:"Company Eight",category:"Technology",start:"2011",end:"2016"},
  {name:"Company Nine",category:"Retail",start:"1981",end:"1989"},
  {name:"Company ten",category:"Retail",start:"1981",end:"1992"},


];

const ages =[33,545,43,58,54,76,8,7,785,643,23,4359,568];

// for(let i=0;i<companies.length;i++){
//   console.log(companies[i])
// }
// companies.forEach(function(company){
//   console.log(`${company.start} this company ends in th year ${company.end}`)
// })
// const candrink=];
// for(i=0;i<ages.length;i++){
//   if(ages[i]>50){
//       candrink.push(ages[i])
//   }
// }
// console.log(candrink)
// const candrink2=ages.filter(age=>age<50)
// console.log(candrink2)
// // const candrink =ages.filter(function(age){
//   if(age >=20){
// return true;
//   }
// })
// console.log(candrink)
// const retailcompany=companies.filter(function(company){
//   if( company.category==='Retail'){
//     return true
//   }
// })

// const retailcompany=companies.filter(company=>company.category==="Retail")
// console.log(retailcompany)
// const company80s=companies.filter(function(company){
//   if(company.start<=1990){
//     return true
//   }
// })
// const company80s=companies.filter(company=>(company.start>=1980&&company.start<1990))
// console.log(company80s)
// const lastedfor=companies.filter(company=>(company.end-company.start>=10))
// console.log(lastedfor)
// const agees=ages.filter(age=>age>10)
// console.log(agees)
// companies.forEach(function(company){
//   console.log(company)
// })
// const company1=companies.filter(company=>(company.start<=1990))
// console.log(company1)
// const company=companies.filter(company1=>company1.category==="Retail")
// console.log(company)
// const companynames=companies.map(company=>`${company.name}`)
// console.log(companynames)
// const companyname=companies.map(company=>`${company.category}[${company.start}-${company.end}]`)
// console.log(companyname)
// const age1=ages
// .map(age=>Math.sqrt(age))
// .map(age=>age*2)
// console.log(age1)
// const companysort=companies.sort((c1,c2)=>(c1.start>c2.start ?1:-1 ))
// console.log(companysort)
// const age1=ages.sort((a,b)=>a-b)
// console.log(age1)
// let agesome=0
// for(let i=0;i<ages.length;i++){
// agesome += ages[i];
// }
// console.log(agesome)
// const ages1=ages.reduce((a,b)=>a+b,0)
// console.log(ages1)
// const company1=companies.reduce(function(total,company){
// return total+(company.end-company.start);
// },0)
// const company1=companies.reduce((a,b)=>a+(b.end-b.start),0)
// console.log(company1)
const combain=ages
.map(age=>age*2)
.filter(age=>age>=20)
.sort((a,b)=>a-b)
.reduce((a,b)=>a+b,0)
console.log(combain)