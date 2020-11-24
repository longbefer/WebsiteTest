window.onload = function(){
	document.getElementsByClassName('favorite')[0].onclick = function(ev){
		document.getElementsByClassName('float-box')[0].style.display = 'block';
		// document.getElementsByClassName('float-box')[0].style.display = (display!='none' ? 'none' : 'block');
		document.getElementsByClassName('favorite')[0].children[0].children[0].src = 'Resource/image/love-click.png';
	}
	document.getElementsByClassName('main')[0].onclick = function(ev){
		document.getElementsByClassName('float-box')[0].style.display = 'none';
		document.getElementsByClassName('search_context')[0].style.display = 'block';
		document.getElementsByClassName('search_box')[0].children[0].placeholder = '';
		document.getElementsByClassName('favorite')[0].children[0].children[0].src = 'Resource/image/favorite.png';
	}
	// nav
	document.getElementsByClassName('search_box')[0].children[0].onfocus = function(ev){
		document.getElementsByClassName('search_context')[0].style.display = 'none';
		document.getElementsByClassName('search_box')[0].children[0].placeholder = '  搜索...';
	}
	
	// index.html
	var image = document.getElementsByClassName('picture');
	for(let i = 0; i < image.length; i++)
		image[i].onclick = function(ev){
			document.getElementsByClassName('display-info')[0].children[1].src = ev.target.src;
			document.getElementsByClassName('display-info')[0].children[1].style.display = 'block';
			document.getElementsByClassName('display-info')[0].children[0].style.display = 'none';
			document.getElementsByClassName('display-info')[0].style.display = 'block';
			document.getElementsByClassName('display-info')[0].style.backgroundColor = 'rgba(0,0,0,0.95)';
			document.getElementsByClassName('display-info')[0].onselectstart = function(ev){return false;};
		}
	var image1 = document.getElementsByClassName('all-comment');
	if(image1)
		for(let i = 0; i < image1.length; i++){
			image1[i].children[0].onclick = function(ev){
				let real = ev.target.parentNode.parentNode.parentNode.children[1].children[0].src;
				let favorite = ev.target.parentNode.parentNode.children[1].children[0].textContent;
				document.getElementsByClassName('buttom-opt')[0].children[0].src = real;
				document.getElementsByClassName('display-info')[0].style.display = 'block';
				document.getElementsByClassName('display-info')[0].children[0].style.display = 'block';
				document.getElementsByClassName('display-info')[0].children[1].style.display = 'none';
				document.getElementsByClassName('display-info')[0].style.backgroundColor = 'rgba(0,0,0,0.95)';
				document.getElementsByClassName('display-info')[0].onselectstart = function(ev){return false;};
				document.getElementsByClassName('likes-times1')[0].textContent = favorite;
			}
		}
	
	// explore.html
	var image2 = document.getElementsByClassName('explore_show')[0];
	if(image2)
		for(let i = 0; i < image2.children.length-1; i++){
			image2.children[i].onclick = function(ev){
				let real = ev.currentTarget.children[1].src;
				let favorite = ev.target.children[0].children[0].textContent;
				document.getElementsByClassName('buttom-opt')[0].children[0].src = real;
				document.getElementsByClassName('display-info')[0].style.display = 'block';
				document.getElementsByClassName('display-info')[0].style.backgroundColor = 'rgba(0,0,0,0.95)';
				document.getElementsByClassName('display-info')[0].onselectstart = function(ev){return false;};
				document.getElementsByClassName('likes-times')[0].textContent = favorite + '次赞';
			}
		}
}