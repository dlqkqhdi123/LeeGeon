// console.log('asfsf')

const number = [1,2,3,4,5,6]
const animal = ['고양이','강아지','코끼리','친칠라']

//number 배열의 길이를 출력해보세요
console.log(number.length)




//객체, objeck
const classRoom = {
    number : '302',
    student : '20',
    aircon : true,
    computer : true,
    pokemon : ['피카츄','라도란'],
    func : () => {
        console.log('함수도담을수 있다')
    }
}
//clasRoom 객체에서 number 이라는 키를 이용해 값을 출력한상황
console.log(classRoom.number)
//classRoom 의 학생수를 출력해보세요 
// ["student"] .student 둘다가능
console.log(classRoom["student"])
console.log(classRoom.student)
console.log(classRoom.pokemon)
classRoom.func()


//점심메뉴

const lunch = [
    {
        name: "짜장면", 
        cost: 7000

    },
    {
        name: "짬뽕",
        cost: 8000
    },
    {
        name: "김밥",
        cost: 3500
    },
    {
        name: "콩나물국밥",
        cost: 6000
    }
]
console.log(lunch[0])
console.log(lunch[0].name)
console.log(lunch[0]["name"])
console.log(lunch[0].cost)
//콩나물 국밥의 가격을 출력해보세요
console.log(lunch[3].name)
console.log(lunch[3].cost)

//for - 반복문
// for(초기화; 조건; 증가/감소){}
    //반복해서 해야할일
let totalCost = 0;
const list = document.getElementById('list')
for(let i = 0; i < lunch.length; i++){
    // console.log(i)
    // console.log(lunch[i])
    // 각 메뉴 이름을 출력해주세요
    // console.log(lunch[i].name)
    //각 메뉴의 금액을 출력햊세요 
    // console.log(lunch[i].cost)
    //'짜장면의 가격은 7000원 입니다' 상태로 출력해주세요 
    console.log(`${lunch[i].name}은 ${lunch[i].cost.toLocaleString('ko-kr')}원입니다`)
    //number.toLocaleString('ko-kr')로 적어주면 현지 통화 기준으로 한국식에 맞춰 천단위 구분자로 표현해준다.

    //전 메뉴의 단가를 모두 더해주세요


    // console.log(lunch[0].cost)
    // console.log(lunch[1].cost)
    // console.log(lunch[2].cost)
    // console.log(lunch[3].cost)
    totalCost = totalCost + lunch[i].cost
    //(축약형) totalCost += lunch[i].cost
    list.innerHTML += `<li>${lunch[i].name} : ${lunch[i].cost}</li>`
    // document.body.innerHTML += `<p>${lunch[i].name} : ${lunch[i].cost}</p>`
}
console.log(totalCost)




