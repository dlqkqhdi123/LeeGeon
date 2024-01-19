// console.log('1123df')
// console.log('for문연습')
// for(초기화 변수 ,조건 ,증감)
// for(let i = 0; i < 10; i++){
//     console.log(i)
//     console.log('i : ${i}')
//     for(let j = 0; j < 10; j++)
//     console.log(`j번째 : ${j}`)
// }

// const pokemon = ['피카츄','이브이','라이츄','파이리','꼬부기','삼새기']
// for(let i = 0; i < pokemon.length; i++){
//     console.log(pokemon[i])
// }


//for(초기화 조건 증감)
for(let i = 2; i <= 9; i++) {
    console.log(i + '단'), 'background-color:red; color:white padding:2px';
    for(let j = 1; j <= 9; j++) {
      console.log(i + ' * ' + j + ' = ' + (i*j));
    }
  }


  let star = '';
  for(let i = 0; i < 5; i++){
    // star = star + '*';
    star += '*'
    console.log(star)
  }