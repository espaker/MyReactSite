function calculateAge(birthday) { 
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs); 
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const age = calculateAge(new Date('01 02 1997'))

const translations = {
    en: {
        Header:{
            Name: 'Espaker Kaminski',
            Desc: 'Developer',
            Contact: 'Text Me'
        },
        AboutMe:{
            Title: 'About Me:',
            Desc: <p id="aboutme">
                Hello, my name is Espaker Kaminski, I'am <b>{age}</b> years old!<br/>
                I'm a Backend developer, but I venture me on Frontend development.<br/>
                I started code in <b>2014</b> in IT technical School, but the opportunity to work with it come only in <b>2018</b>.
                I love code since I started!
            </p>
        },
        WorkExperience:{
            Title: 'Work Experiences:',
            Jobs: [
                {  
                    Title: 'NodeJS/ReactJs Fullstack Developer',
                    Company: 'Ibridge Technology',
                    Website: 'https://www.linkedin.com/company/ibridge-technology-br/',
                    Period: '2020 - Present',
                    Desc: 'Desenvolver Soluções em telecomunicações.'
                },
                {
                    Title: 'PHP/Laravel Fullstack Developer',
                    Company: 'Canal Telecom Tecnologia',
                    Website: 'https://www.linkedin.com/company/canal-telecom/',
                    Period: '2020 - 2020',
                    Desc: 'Desenvolver Soluções em telecomunicações usando Laravel com arquitetura MVC.'
                },
                {
                    Title: 'Fullstack PHP Fullstack Developer',
                    Company: 'Del Grande',
                    Website: 'https://www.linkedin.com/company/delgrande/',
                    Period: '2017 - 2020',
                    Desc: 'Desenvolver soluções em telecomunicações, integrar sistemas, manter e corrigir soluções já existentes.'
                },
                {
                    Title: 'Computer Lab Monitor',
                    Company: 'Instituto Mix',
                    Website: 'https://www.linkedin.com/company/institutomix/',
                    Period: '2015 - 2016',
                    Desc: 'Acompanhar e auxíliar os alunos e manter o laboratório organizado e em funcionamento.'
                }
            ]
        }
    },
    br: {
        Header:{
            Name: 'Espaker Kaminski',
            Desc: 'Desenvolvedor',
            Contact: 'Fale Comigo'
        },
        AboutMe:{
            Title: 'Sobre Mim:',
            Desc: <p id="aboutme">
                Olá, me chamo Espaker Kaminski, tenho <b>{age}</b> anos!<br/> 
                Sou desenvolvedor Backend porém também me aventuro no Frontend.<br/> 
                Comecei desenvolver em <b>2014</b> ao começar meu curso técnico em informática, a 
                oportunidade de trabalhar como desenvolvedor veio somente em <b>2018</b>. Mas amo 
                programar desde que tive meu primeiro contato com a programação!!!
            </p>
        },
        WorkExperience:{
            Title: 'Experiências Profissionais:',
            Jobs: [
                {  
                    Title: 'Desenvolvedor Fullstack NodeJS/ReactJs',
                    Company: 'Ibridge Technology',
                    Website: 'https://www.linkedin.com/company/ibridge-technology-br/',
                    Period: '2020 - Atualmente',
                    Desc: 'Desenvolver Soluções em telecomunicações.'
                },
                {
                    Title: 'Desenvolvedor Fullstack PHP/Laravel',
                    Company: 'Canal Telecom Tecnologia',
                    Website: 'https://www.linkedin.com/company/canal-telecom/',
                    Period: '2020 - 2020',
                    Desc: 'Desenvolver Soluções em telecomunicações usando Laravel com arquitetura MVC.'
                },
                {
                    Title: 'Desenvolvedor Fullstack PHP',
                    Company: 'Del Grande',
                    Website: 'https://www.linkedin.com/company/delgrande/',
                    Period: '2017 - 2020',
                    Desc: 'Desenvolver soluções em telecomunicações, integrar sistemas, manter e corrigir soluções já existentes.'
                },
                {
                    Title: 'Monitor de laboratório de informática',
                    Company: 'Instituto Mix',
                    Website: 'https://www.linkedin.com/company/institutomix/',
                    Period: '2015 - 2016',
                    Desc: 'Acompanhar e auxíliar os alunos e manter o laboratório organizado e em funcionamento.'
                }
            ]
        }
    }
}



// eslint-disable-next-line
export default (lang, component) => {
    let translation = {}

    if (translations[lang]) {
        if (translations[lang][component]) translation = translations[lang][component]
    } else {
        if (translations['en'][component]) translation = translations['en'][component]
    }

    return translation
}