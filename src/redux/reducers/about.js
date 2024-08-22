export default about;
export {setAbout, setAboutList, setAboutInfo}


const defaultState = {
	list:[
		{title: 'Индивидуальный и комплексный подход', text:'У нас не бывает типовых решений, каждое приложение уникально'},
		{title: 'Инструменты монетизации', text: 'Интеграция рекламы и ее дальнейшая оптимизация, работа с подписками и покупками внутри приложения. Быстро и эффективно, исходя из Ваших пожеланий.'},
		{title: 'Бесплатная поддержка Вашего проекта', text: 'Мы не спешим расставаться с заказчиком, даже наоборот - бесплатно сопровождаем проект после публикации. Вносим правки и устраняем баги.'},
		{title: 'Доступность и многогранность', text: 'Только начинаете свой путь в мобайле или уже перешли на следующий уровень и решили повысить качество и сложность продукта? Мы найдем и предложим лучшие решения для любых задач.'},
		{title: 'Сроки реализации', text: 'Благодаря большому количеству собственных библиотек и шаблонов, мы значительно сокращаем время, необходимое для разработки.'},
	],
	info:[
		{value: '4', text: 'года опыта в работе'},
		{value: '20+', text: 'постоянных клиентов'},
		{value: '150+', text: 'реализованных проектов'},
	]
};

const SET = 'SET_ABOUT';
const SET_LIST = 'SET_LIST';
const SET_INFO = 'SET_INFO';

// ____ funcs _____
function about(state = defaultState, action){
	switch (action.type) {
		case SET:	return action.data;
		case SET_LIST:	return {...state, list: action.data};
		case SET_INFO:	return {...state, info: action.data};

		default: return state
	}
}

// _____ actions ______
function setAbout(data){
	return {type: SET,	data}
}

function setAboutList(data){
	return {type: SET_LIST,	data}
}

function setAboutInfo(data){
	return {type: SET_INFO, data}
}
