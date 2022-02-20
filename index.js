(function(){

    let interValList = [];
    function registerSetInterval(ele,timer){
        const interval = setInterval(() => {
            ele.style.visibility = 'visible';
            ele.style.opacity=1;
            clearInterval(interval);
        }, timer);

        interValList.push(interval);
    }

    function setVisibilityAndOpactiy(ele){
        ele.style.opacity = 0;
        ele.style.visibility = 'hidden';
    }

    const container = document.getElementById('container');
    const chatbotIconEle = document.getElementById('chatbotIcon');
    const chatbotBoxEle = document.getElementById('chatbot-box');
    chatbotIconEle.addEventListener('click',function(){
        
        if(chatbotBoxEle.style.display == 'none')
        {
            chatbotBoxEle.style.display = 'block';
            container.style.backgroundColor = '#686868';
    
            const topComponentEle = document.getElementById('top-component');
            const introductionContainerEle = document.getElementsByClassName('introduction-content')[0];
            const chatContainerEle = document.getElementById('chat-container');
    
            setVisibilityAndOpactiy(topComponentEle);
            setVisibilityAndOpactiy(introductionContainerEle);
            setVisibilityAndOpactiy(chatContainerEle);
    
            registerSetInterval(topComponentEle,1000); 
            registerSetInterval(introductionContainerEle,3000); 
            registerSetInterval(chatContainerEle,4000); 
            
            const FAQList = document.querySelectorAll('.FAQ-container > ul > li');
            let listTimer = 5000;
            FAQList.forEach((ele)=>{
                setVisibilityAndOpactiy(ele);
                registerSetInterval(ele,listTimer);
                listTimer+=2000;
            });
    
            const chatStartEle = document.querySelector('#chat-container > span')
            setVisibilityAndOpactiy(chatStartEle);
            registerSetInterval(chatStartEle,listTimer);         
        }
    });

    container.addEventListener('click',function(event){
        if(event.target.id == 'container')
        {
            chatbotBoxEle.style.display = 'none';
            container.style.backgroundColor = '#E5E5E5';

            interValList.forEach(function(interval){
                clearInterval(interval);
            });

            interValList = [];
        }
    })
})()