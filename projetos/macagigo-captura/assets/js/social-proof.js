// Social Proof Notifications
(function() {
    const buyers = [
        "Luisa Valencia", "Laura Muñoz Toro", "Paula Andrea González", "Laura Giraldo",
        "Alejandra Mendez", "Daniela Acero Martínez", "Lorencita Builes", "Juan Sebastián Duque",
        "Yaisury Chavarría", "Laura Sofia Serna", "Isabella Anaya", "Valeria Monzon",
        "Mariana Torres", "Maria Jose Arenas", "Yenifer López", "Andrea Aristizabal",
        "Luisa Mariana Pachon", "Sara Isabel Jaramillo", "Claudia María García",
        "Ana Maria Carranza", "Dennys Alzate", "Manuela Sierra", "Michelle Marin",
        "Kelly Quintero", "Maria Isabel Marin", "Daniela Puerta", "Laura González",
        "Nickolle Montilla", "Natalia Echeverri", "Laura Salazar", "Luciana Pombo",
        "Mariana David", "Luisa Fernanda Martínez", "Sara Lucía Aguirre", "Laura Correa",
        "Laura Agudelo", "Sandra Milena Davila", "Milena Guerrero", "Vanessa Escobar",
        "Natalia Quitian", "Juliana Escobar", "Nora Elena", "Katherine Serna",
        "Maria Belen Eraso", "Sindy Salazar", "Erica Quintero", "Valentina Giraldo",
        "Salome Montoya", "Daniela Bonilla", "Julieth Ortega", "Carolina Ocampo",
        "Sofia Mejia", "Paula Zapata", "Valeria Benavides", "Nayid Huertas",
        "Valentina Vélez", "Manuela Cardona", "Manuela Restrepo", "Daniela Chica",
        "Maria Jose Arias", "Laura Paulina Giraldo", "Maria Fernanda Lopez",
        "Milena Echeverri", "Maria Fernanda Gomez", "Yenifer Aristizabal",
        "Juliana Restrepo", "Maria del Mar Endo", "Maria Alejandra Florez",
        "Sara Ruiz Mejía", "Valentina Rios", "Maria Clara García", "Johanna Ariza",
        "Mariana Ocampo", "Natalia Lastra", "Heli Mejia", "Maria Camila Blanco",
        "Leidy Viera", "Julia Medina", "Cindy Valeria Serna", "Leydy Tatiana Hoyos",
        "Susana Piedrahita", "Lizeth Hernandez", "Vanesa González", "Sandra Patricia Zapata",
        "Wendy Valencia", "Valeria Valencia", "Maria Fernanda Ramirez", "Diana Garcia",
        "Veronica Baracaldo", "María José Henriquez", "Camila Gomez", "Yulieth Gómez",
        "Xiomara Jaramillo", "Mariana Alzate", "Paula Rico", "Isabella Trujillo",
        "Carolina Rodriguez", "Jasmine Sanabria", "Alejandra Muñoz", "Diana Sofia Arango",
        "Nathaly Guzman", "María Fernanda Perez", "Luisa Ramirez", "Julissa Herrera",
        "Daniella Pretel", "Kely Sanchez", "Laura Bedoya", "Andrea García",
        "Camila Posada", "Nathalia Villalobos", "Dahiana Londoño", "Stefany González",
        "Maria Andrea Pumarejo", "Kelly Castaño", "Paula Daniela Parra", "Eileen Sanjuan",
        "Tatiana Marin", "Daniela Garcia", "Johana Posos", "Caren Jimenez",
        "Mariana Sanchez", "Andrea Lema", "Juanita Suarez", "Valentina Rangel",
        "Aura Manuela Aguirre", "Sara Gallego", "Maria Salomé Álvarez", "Eliana Uribe",
        "Maria Gallego", "Lina M Toro", "Maria Jose Martinez", "Estefanía Franco",
        "Salome Castaño", "Leidy López", "Diomara Zuluaga", "Jeniffer Quintero",
        "Manuela Cuadros", "Daniela Parga", "Maria Vazquez", "Estefanía Salazar",
        "Valeria Rios Valencia", "Angie Perez", "Paola Andrea Lopez", "Diana Martinez",
        "Katerine Giraldo", "Alejandra Ospina", "Manuela Ortega", "Luisa Diaz",
        "Angie Silva", "Melissa Yepez", "Paola Medina", "Monica Gonzalez",
        "Manuela Ramirez", "Eliana Bolaños", "Paulina Navarro", "María Antonia Sanchez",
        "Marines Zarate", "Madeline Morel", "Ana Sofia Bedoya", "Estefania Zuluaga",
        "Daniela Calderón", "Manuela Barth", "Natalia Gomez", "Lizeth Ramírez",
        "Luisa Fernanda Franco", "Angie Dominguez", "Carolina Yehuda", "Andres Venegas",
        "Laura Londoño", "Katia Miriam de Melo", "Abril Mariana Ruiz", "Stefania Requena",
        "Jennifer Avendaño", "Luisa Mazariegos", "Alejandra Ovalle", "Mónica Beltran",
        "Estefania Fialko", "Camila Mosquera", "Karen Iturmendi", "Angie Lorena Parra",
        "Laura Ramirez Zuluaga", "Alejandro Quintero", "Lina Robledo", "Laura Juliana Brito",
        "Paula Henao", "Susana Arango", "Valentina Zuluaga", "Laura López",
        "Angelica Jaramillo", "Ingrith Tatiana Riaño", "Laura Melisa Ramírez",
        "Mariana Ossa", "Sara Rubio", "Maria Camila Rodriguez", "Stephany Molina",
        "Raquel Lora", "Sofia Gonzalez", "Maria Vaca", "Daniela Duque",
        "Valentina Gomez Giraldo", "Laura Camila Castañeda", "Karol Lizeth Gonzalez",
        "Sara Casas", "Isabel Cristina Zuluaga", "Luisa Fernanda Vega", "Evelyn Molina",
        "María Ximena Campollo", "Maria Fernanda Arcila", "Norla Beronica Zuluaga",
        "Leidy Johana Castro", "Valentina Castillo", "Laura Hervert", "Jaklin Andrade",
        "Alejandra Botero", "Lina Maria Monsalve", "Yesica Natalia Ocampo", "Evelin Gallo",
        "Erika Mesa", "Maria Velez", "Vanessa Padilla", "Natalia Hernandez",
        "Maria Juliana Reyes", "Mónica Roldán", "Ana María Valencia", "Sara Medina",
        "Natalia Cadena", "Estefanie Sophia Otañez", "Salome Valencia", "Camila Jaramillo",
        "Isabela Yepes", "Estrellita Torres", "Fabiola Castro", "Juanita Bernal",
        "Laura Rodriguez", "Jazmin Mernes", "Maria Camila Arbelaez", "Anamaria Callejas",
        "Carolina Gallego", "Ana María Giraldo", "María Villanueva", "Laura Toro",
        "Sandra Natali Gomez", "Loreny Molero", "Sofia Hernandez", "María Jeniffer Quintero",
        "Alejandra Hernandez", "Valentina Ortiz", "Ana Sofia Arango", "Laura Galindo",
        "Valeria Suarez", "Julitza Aristizabal", "Daniela Quintero", "Maria José Hernandez",
        "Valentina López", "Geraldine Peralta", "María Isabel Arenas", "Dayana Aristizabal",
        "Daniela Abisambra", "Laura Sánchez", "Valeria Restrepo", "Vanessa Alexandra Yepes",
        "Valentina Pineda", "Sara Gutiérrez", "Yuliana Torre", "Laura Zuluaga",
        "Jessica Suárez", "Laura Botero", "Ana Maria Jaramillo", "Jhon Suarez",
        "Alejandra Tabarez", "Sofía López Graciano"
    ];
    
    const timeAgo = ["hace 1 minuto", "hace 2 minutos", "hace 3 minutos", "hace 5 minutos", "hace 8 minutos", "hace 10 minutos", "hace 15 minutos"];
    
    let container = document.createElement('div');
    container.id = 'social-proof-container';
    document.body.appendChild(container);
    
    function showNotification() {
        const name = buyers[Math.floor(Math.random() * buyers.length)];
        const time = timeAgo[Math.floor(Math.random() * timeAgo.length)];
        
        const notification = document.createElement('div');
        notification.className = 'social-proof-notification';
        notification.innerHTML = `
            <div class="spn-icon">🎉</div>
            <div class="spn-content">
                <strong>${name}</strong>
                <span>acaba de asegurar su lugar</span>
                <small>${time}</small>
            </div>
        `;
        
        container.appendChild(notification);
        
        setTimeout(() => notification.classList.add('show'), 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 500);
        }, 4000);
    }
    
    // Start after 2 seconds, then every 5 seconds
    setTimeout(() => {
        showNotification();
        setInterval(showNotification, 5000);
    }, 2000);
})();
