  const newDeveloper = {
    name: prompt('Руководитель: Как Вас зовут?'),
    surname: prompt('Руководитель: Какая у Вас фамилия?'),
    age: prompt('Руководитель: Сколько Вам лет?'),
  };
  
  let exp;
  
  while (!Number.isInteger(parseInt(exp))) {
    exp = prompt('Руководитель: Сколько лет опыта в it?');
  }
  
  if (exp < 3) {
    alert('Руководитель: Прости, но у тебя слишком мало опыта :(');
  } else {
    alert("Руководитель: Добро пожаловать в команду!");
    alert("Руководитель: Поприветствуйте нового коллегу!");
  
    developers.map(developer => {
      alert($[developer.name], "Привет!");
    });
  
   
    developers.push(newDeveloper);
  
  }
  
  console.log(developers);