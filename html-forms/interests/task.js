const listOfInterests = document.querySelector('.interests_main');

listOfInterests.addEventListener('change', function (e) {
        
        if (e.target.closest('.interest').querySelector('.interests')) {
     
            const arr = [...e.target.closest('.interest').querySelectorAll('.interest__check')];
        
            for ( const i of arr) {    
                i.checked = e.target.checked;
            };

        };

        if (!e.target.closest('.interest').querySelector('.interests')) {

            const allChecks = [...e.target.closest('.interests').querySelectorAll('.interest__check')];

            const isAllChecked = allChecks.every((check) => check.checked);
            
            if (isAllChecked) {
                
                e.target
                    .closest('.interests')
                    .closest('.interest')
                    .querySelector('.interest__check').checked = true;
                  
            } else {
                
                e.target
                    .closest('.interests')
                    .closest('.interest')
                    .querySelector('.interest__check').checked = false;
               
            };
        };
        
    });
