
		var oBtn=document.getElementById('btn');
		
		var oTable=document.querySelectorAll('.table');
		var oBig=document.querySelector('.motai2');
		var oSection=document.getElementsByTagName('section')[0];
		var oInfo_sec=oSection.querySelector('.info_sec');
		var oClick=document.querySelector('.click');
		var len=oTable.length;
		var oText=oBig.querySelectorAll('.other_num');
		var aLi=document.getElementsByTagName('li');
		
		oBtn.onclick=function(){
			motai('.motai','close');
		};
//		oBtn_close.onclick=function(){
//			oMotai.classList.remove('transition');
//			oBox.classList.remove('box_tran');
//		};
		
		var oSeat=document.querySelector('.seat');
		var oAdd=document.querySelector('.add');
		oAdd.onclick=function(){
			var _num='';
			var num_max=oAdd.parentNode.previousElementSibling || oAdd.parentNode.previousSibling;
			var arr=num_max.innerText.split('');
			for(var i=0;i<arr.length;i++){
				if(!isNaN(arr[i])){
					_num+=arr[i];
				}
			};
			add_chair(_num);
		};
		
		function add_chair(num){
			num++;
			
			var oDiv=document.createElement('div');
			oDiv.className='person';
			
			
			var oDiv1=document.createElement('div');
			oDiv1.className='table';
			oDiv1.innerText='第'+ num +'席';
			
			var oUl=document.createElement('ul');
			oUl.className='chair';
			for(var i=0;i<6;i++){
				var aLi=document.createElement('li');
				oUl.appendChild(aLi);
			};
			oDiv1.appendChild(oUl);
			oDiv.appendChild(oDiv1);
			
			oSeat.insertBefore(oDiv,oAdd.parentNode);
			oTable=document.querySelectorAll('.table');
			len=oTable.length;
			toBig();
			aLi=document.getElementsByTagName('li');
			li();
		};
		
		
		
	function toBig(){
			for(var j=0;j<len-1;j++ ){
				
				oTable[j].off=true;
				oTable[j].index=j;
				
				oTable[j].onclick=function(){
//					alert(len)
					if(oText[0].innerText !== ''){
						oText[1].innerText = '?';
					}
					
					if(this.off){
						for(var i=0;i<len;i++){
							oTable[i].style.display='none';
						};
						this.style.display='block';
						oSection.classList.add('sec');
						oInfo_sec.style.display='none';
						
						oBig.classList.add('transition');
						this.parentNode.classList.add('toAuto');
						if(this.index == 0){
							this.classList.add('toBig1');
						}else{
							this.classList.add('toBig');
						}
						this.off=false;
					}else{
						motai('.motai3','close1');
						
						for(var i=0;i<len;i++){
							oTable[i].style.display='block';
						};
						oSection.classList.remove('sec');
						oInfo_sec.style.display='block';
						oBig.classList.remove('transition');
						this.parentNode.classList.remove('toAuto');
						if(this.index == 0){
							this.classList.remove('toBig1');
						}else{
							this.classList.remove('toBig');
						}
						this.off=true;
					}
					
					// 宾客所选的席位
					oText[0].innerText = this.innerText;
					// 宾客所选的座位
					
					
				}
				
			}
}
	toBig();
	function li(){
    
	for(let k=0;k<aLi.length-6;k++){
		
			aLi[k].onclick=function(ev){
				var ev = ev || window.event;
				ev.stopPropagation();
				for(var n=0;n<aLi.length;n++){
					aLi[n].style.background='url(img/person.jpg) no-repeat';
					aLi[n].style.backgroundSize='100%';
				};
				this.style.background='url(img/wechat.jpg) no-repeat';
				this.style.backgroundSize='100%';
				oText[1].innerText = k%6 + 1;
			}
	}
}
	li();

		function motai(mo,close){
			var oMotai=document.querySelector(mo);
			var oBox=oMotai.querySelector('.box');
			var oBtn_close=document.getElementById(close);
			console.log(oMotai)
				oMotai.classList.add('transition');
				setTimeout(function(){
					oBox.classList.add('box_tran');
				},500);
				
			oBtn_close.onclick=function(){
				oMotai.classList.remove('transition');
				oBox.classList.remove('box_tran');
			};	
		}