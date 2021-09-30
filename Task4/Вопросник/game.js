let game={
    /**
     * Запускает игру.
     */

    
    run() {
        let flag=false
        while (flag == false){
            let ind=0;
            let score=0;
            while (answers[ind]!==undefined){
                console.log(answers[ind].text)
                console.log(answers[ind].variants)
                let usr_answer=prompt('Введите ответ')
                if (usr_answer == answers[ind].correctVariant){
                    score+=1
                }
                ind+=1
            }
            
            console.log (`Ваш результат ${score}`)
            if (prompt('Введите "Далее", если хотите начать заного')=='Далее'){
                score = 0
                ind = 0
            } else{
                flag=true
            }
        }
    },
                


        
            
            
            
    
    
    

    // Этот метод выполняется при открытии страницы.
    init() {
        console.log("Здраствуйте вы попали в игру 'кто хочет стать миллионером?'");
    },
};
    


