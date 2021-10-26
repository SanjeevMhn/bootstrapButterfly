
//for handelling button states and image filtering
const optionSelect = document.querySelectorAll(".opt");
const imageCol = document.querySelectorAll(".col-4");

optionSelect.forEach((op,index)=>{

	op.addEventListener("click",function(){
		removeSelection();
		op.classList.add("text-primary");
		let className;
		switch (index) {
			case 0:
				className = " ";
				break;
			case 1:
				className = "app";
				break;
			case 2:
				className = "cards";
				break;
			case 3:
				className = "web";
				break;
		}

		if(className != " "){
			imageCol.forEach((img)=>{
				if(img.classList.contains(className)){
					img.style.display = "block";
				}else{
					img.style.display = "none";
				}
			})
		}else{
			imageCol.forEach((img)=>{
				img.style.display = "block";
			});
		}
 	})
})

function removeSelection(){
	optionSelect.forEach((opt)=>{
		opt.classList.remove("text-primary");
	})
}
