const btns = document.querySelectorAll('.axton-btn');
	btns.forEach(btn=>{
		btn.addEventListener('mouseenter', ()=>{
			btn.classList.remove('axton-btn');
			btn.classList.add('axton-btn-inverted');
		})
		btn.addEventListener('mouseleave', ()=>{
			btn.classList.remove('axton-btn-inverted');
			btn.classList.add('axton-btn');
		})
	})