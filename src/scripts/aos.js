
import AOS from 'aos';


export default () => 
	AOS.init({
		delay: 300,
		duration: 500,
		mirror: false,
	});