export class Init{
    load(){
        if(localStorage.getItem('projects') === null || localStorage.getItem('projects') == undefined){
            console.log('projects not found, creating...');
            var projects = [
                {
                    name: 'Project 1', 
                    type: 1,
                    designCost: 2000000,
                    constructionCost: 19000000
                },
                {
                    name: 'Project 2', 
                    type: 2,
                    designCost: 3000000,
                    constructionCost: 22000000
                },
                {
                    name: 'Project 3', 
                    type: 3,
                    designCost: 5000000,
                    constructionCost: 30000000
                }
            ];

            localStorage.setItem('projects', JSON.stringify(projects));
            return
        }
        else{
            console.log('Found projects.');

        }
    }

    addProject(newProject){
        
        if(localStorage.getItem('projects') === null || localStorage.getItem('projects') == undefined){
            this.load();
            var Projects1 = JSON.parse(localStorage.getItem('projects'));
            Projects1.push(newProject);

            localStorage.setItem('projects', JSON.stringify(Projects1));
        }
        else{
            var Projects2 = JSON.parse(localStorage.getItem('projects'));
            Projects2.push(newProject);
            localStorage.setItem('projects', JSON.stringify(Projects2));
        }
    }

    deleteProject(ProjectText){
        if(localStorage.getItem('projects') === null || localStorage.getItem('projects') == undefined){
            this.load();
            var Projects1 = JSON.parse(localStorage.getItem('projects'));

            for(var i = 0 ; i < Projects1.length ; i++){
                if(Projects1[i].name == ProjectText){
                Projects1.splice(i, 1);
                }
            }
            console.log(ProjectText+' was deleted');
            localStorage.setItem('projects', JSON.stringify(Projects1));
        }
        else{
            var Projects2 = JSON.parse(localStorage.getItem('projects'));

            for(var i = 0 ; i < Projects2.length ; i++){
                if(Projects2[i].name == ProjectText){
                Projects2.splice(i, 1);
            }
            localStorage.setItem('projects', JSON.stringify(Projects2));
        }
        console.log(ProjectText+' was deleted');
    }

}
}