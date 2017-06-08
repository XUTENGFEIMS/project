
   		$(function(){
			$.ajax({
				type:"get",
				url:"js/flow.json",
				async:true,
				data:"",
				dataType:"json",
				success:function(data){
					var datas=data.communication.posts;

                    $.each(datas, function(i,x) {
                    
                    if(x.type=="leftText"){
                    	
                    		
                    	
                  	     $("#text").append('<div class="chat-one">'+              	
                '	<span>'+x.dateTime+'</span>'+
                '	<div class="chat-f">'+
                '		<div class="chat-f-w">'+
                '			<img src="img/2.png">'+
                '		</div>'+
                '	</div>	'+
                '	<div class="chat-r">'+
                '		<p>'+x.name+'</p>'+
                '		<div class="chat-r-w">'+x.content+
                '			<em><img src="img/leftarrow.png"></em>'+
                '		</div>'+
                '	</div>'+
                ' </div>');  
                 }
                    
                  if(x.type=="rightText"){
                  	   $("#text").append('<div class="chat-two">'+              	
                '	<span>'+x.dateTime+'</span>'+
                '	<div class="chat-f">'+
                '		<div class="chat-f-w">'+
                '			<img src="img/1.png">'+
                '		</div>'+
                '	</div>	'+
                '	<div class="chat-r">'+
                '		<p></p>'+
                '		<div class="chat-r-w">'+x.content+
                '			<em><img src="img/rightarrow.png"></em>'+
                '		</div>'+
                '	</div>'+
                ' </div>');  
                  }
                       if(x.type=="leftSound"){
                  	   $("#text").append('<div class="chat-fmusic">'+              	
                '	<span>'+x.dateTime+'</span>'+
                '	<div class="chat-f">'+
                '		<div class="chat-f-w">'+
                '			<img src="img/2.png">'+
                '		</div>'+
                '	</div>	'+
                '	<div class="chat-r">'+
                '		<p>'+ x.name+'</p>'+
                '		<div class="chat-r-w">'+'<img src="img/au3.png">'+
                   '<em><img src="img/leftarrow.png"></em>'+
                '		</div>'+
                '	</div>'+
                ' </div>');  
                  } 
                   
                      if(x.type=="rightSound"){
                  	   $("#text").append('<div class="chat-rmusic">'+              	
                '	<span>'+x.dateTime+'</span>'+
                '	<div class="chat-f">'+
                '		<div class="chat-f-w">'+
                '			<img src="img/1.png">'+
                '		</div>'+
                '	</div>	'+
                '	<div class="chat-r">'+
                '		<p></p>'+
                '		<div class="chat-r-w">'+'<img src="img/au4.png">'+
                   '<em><img src="img/rightarrow.png"></em>'+
                '		</div>'+
                '	</div>'+
                ' </div>');  
                  } 
                   
                           if(x.type=="leftImage"){
                  	   $("#text").append('<div class="chat-fimg">'+              	
                '	<span>'+x.dateTime+'</span>'+
                '	<div class="chat-f">'+
                '		<div class="chat-f-w">'+
                '			<img src="img/2.png">'+
                '		</div>'+
                '	</div>	'+
                '	<div class="chat-r">'+
                '		<p>'+x.name+'</p>'+
                '		<div class="chat-r-w">'+'<img src="img/pic1.png">'+'<img src="img/pic1.png">'+
                   '<em><img src="img/leftarrow.png"></em>'+
                '		</div>'+
                '	</div>'+
                ' </div>');  
                  } 
                   
                     if(x.type=="rightImage"){
                  	   $("#text").append('<div class="chat-rimg">'+              	
                '	<span>'+x.dateTime+'</span>'+
                '	<div class="chat-f">'+
                '		<div class="chat-f-w">'+
                '			<img src="img/1.png">'+
                '		</div>'+
                '	</div>	'+
                '	<div class="chat-r">'+
                '		<p></p>'+
                '		<div class="chat-r-w">'+'<img src="img/pic1.png">'+'<img src="img/pic1.png">'+
                   '<em><img src="img/rightarrow.png"></em>'+
                '		</div>'+
                '	</div>'+
                ' </div>');  
                  } 
                   
                 });
                 $("#text .chat-fmusic").on("click",function(e){
	                          
                       })
                 }
				 
                     })
			
			     
                   });

		      
		
	

	            
          
    



 
 
       
          
  
   	    
	       
   	
      
       
   

   
