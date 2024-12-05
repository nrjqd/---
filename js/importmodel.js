 fetch('./navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Navbar 404');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
		});
		


fetch('./footer.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Footer 404');
                }
                return response.text();
            })
            .then(data => {
                document.getElementById('footer').innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading footer:', error);
			});



fetch('./sidebar.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('sidebar 404');
                }
                return response.text();
            })
            .then(data => {
                document.getElementById('sidebar').innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading sidebar:', error);
			});
			
