

    const players = [
        {
          id: 1,
          name: "Ivan",
          scorePoints: 100,
        },
        {
          id: 2,
          name: "Petr",
          scorePoints: 3600,
        },
        {
          id: 3,
          name: "Vadim",
          scorePoints: 3433,
        },
        {
          id: 4,
          name: "Olga",
          scorePoints: 2356,
        },
        {
          id: 6,
          name: "Oleg",
          scorePoints: 7800,
        },
      ];
      
      let maxScorePoint = 0;
      for (let player of players) {
        maxScorePoint = Math.max(maxScorePoint, player.scorePoints);
      }
      console.log(maxScorePoint);

      //я добавила максимальное значение в конец массива, и работала уже с таким вариантом, чтобы удобнее проверять правильность напомления Math.max


  //вариант 2 (при )    

    const players = [
      {
        id: 1,
        name: "Ivan",
        scorePoints: 100,
      },
      {
        id: 2,
        name: "Petr",
        scorePoints: 3600,
      },
      {
        id: 3,
        name: "Vadim",
        scorePoints: 3433,
      },
      {
        id: 4,
        name: "Olga",
        scorePoints: 2356,
      },
      {
        id: 6,
        name: "Oleg",
        scorePoints: 7800,
      },
    ];
    
  


//задать новый пустой массив и запушить в него нужные нам свойстава 

    const onlyScoresPoints = []
    
    for(let player of players) {
      onlyScoresPoints.push(player.scorePoints)
    }
   
    console.log(onlyScoresPoints); //вывели в консоль новый массив

    let maxScorePoint = (Math.max(...onlyScoresPoints)); //spread-оператор вливает нам значения массива в нужное мето (здесь в метод, но можно и в новый массив)

    console.log(maxScorePoint);



   