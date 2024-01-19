console.log('asdf')
const title = document.getElementById('text')
console.log(title.textContent)

//title.textContents 내용을 배열로 변환
//spilt('기준이 되는 문자')메소드 : 기준이 되는문자를 기준으로 쪼개 배열로변환, 그냥 따옴표를 넣으면 글자단위로 쪼갠다.
const textArray = title.textContent.split('')
console.log(textArray)
title.textContent = ''
    for(let i = 0; i < textArray.length; i++){
        setTimeout(() => {
            console.log(textArray[i])
            title.textContent += textArray[i]        
        }, 500 * i)
    }
/**
 * 타이틀의 내용을 비워준다                     9
 * 타이틀의 텍스트 내용 배열을 반복해서 처리     10
 * 택스트 내용을 누적해서 추가                  13
 * 500 * i 초마다 지연해서 반복처리             14
 *   */    

    
    
// const p = document.createElement('p')
// p.textContent = title.textContent
// createElement('태그이름') : 태그를 생성하는 메소드
//생성한 p 태그 안에 title의 택스트 내용을 할당
//body의 맨마지막 부분에 생성한 p 태그 추가
// document.body.append(p)
