import React, { useState } from 'react';


const Quizziz = function () {
    const questions = [
        {
            title: 'React - это ... ?',
            variants: ['библиотека', 'фреймворк', 'приложение'],
            correct: 0,
        },
        {
            title: 'Компонент - это ... ',
            variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
            correct: 1,
        },
        {
            title: 'Что такое JSX?',
            variants: [
            'Это простой HTML',
            'Это функция',
            'Это тот же HTML, но с возможностью выполнять JS-код',
            ],
            correct: 2,
        },
        {
            title: 'Какой hook отвечает за состоние?',
            variants: [
            'useRef',
            'useAfterEffects',
            'useState'
            ],
            correct: 2
        },
        {
            title: 'В чем различие между "==" и "===" ?',
            variants: [
            '"==" сравнивает с приведением типов, а "===" без',
            'в том, что у первогого не хватает одного "="',
            'оператор "==" сравнивает только типы, а "==" значения'
            ],
            correct: 0
        },
        {
            title: 'Почему сравнение двух равных объектов приводит к false?',
            variants:[
            'у какого-либо объекта присутствует значение false',
            'у объектов всегда уникальная ссылка на каждого',
            'объекты не поддерживают сравнение, и возвращают false'
            ],
            correct: 1
        },
        {
            title: "Как выглядит спред-оператор",
            variants: [
            '...',
            '!!',
            '&&'
            ],
            correct: 0
        },
        {
            title: 'В  чем различие между undefined и null',
            variants: [
            'undefined тоже как null, но в виде ошибки',
            'они вообще-то одинаковы',
            'undefined - неявный, значение по умолчанию, null - значение отсутсвия значения'
            ],
            correct: 2
        }
        ];
        const [truly, setTruly] = useState(0)
        
        function Game({ question, step }) {
        const persentage = Math.round(step / questions.length * 100)
        function clickHandlerQuestion(index) {
            setStep(step + 1)
            
            if(index === question.correct) setTruly(truly + 1)
            console.log(truly)
        }
        return (
            <>
            <div className="progress">
                <div style={{ width: `${persentage}%` }} className="progress__inner" key={question.title}></div>
            </div>
            <h1>{question.title}</h1>
            <ul key={question.title}>{question.variants.map((text, index) => <li className='question-variants' key={text} onClick={() => clickHandlerQuestion(index)}>{text}</li>)}</ul>
            </>
        );
        }
        function nulling() {
        setStep(step - step)
        setTruly(truly - truly)
        }
        const [step, setStep] = useState(0)
    
        function Result({truly}) {
        return (
            <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" className='result-img'/>
            <h2>Вы отгадали {truly} ответа из {questions.length}</h2>
            <button onClick={() => nulling()} className="button-retry">Попробовать снова</button>
            </div>
        );
        }
        return (
        <div className="App main">
            <div className='block'>{step !== questions.length ? <Game step={step} question={questions[step]}/> : <Result truly={truly}/>}</div>
        </div>
        );
  };


export default Quizziz;