pipeline {    
agent any
  tools {nodejs "Nodejs"}
  	stages{
		stage('checkout code') {
		steps{
			git 'https://gitlab.com/parademahesh/angular.git'
			}	
		}
		stage('Install dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }
		/*stage('Test') {
			steps {
				sh 'npm run test-headless'
				}
			}*/	
		stage('Build') {
			steps {
				//sh 'node --max_old_space_size=256 node_modules/@angular/cli/bin/ng build --prod'
				//sh 'npm test'
				sh "npm run build"
				//sh "npm run build --prod"
				//sh 'npm cache clean --force'
				// sh 'npm update'
				// sh 'ng build'
				// sh 'npm build --prod'
				//sh 'npm run ng -- build --prod'
				}
			}
		stage('copy'){
			steps{
				sh 'cp -r /var/lib/jenkins/workspace/Angular-pipeline/src/* /usr/share/nginx/html'
				//sh 'cp -R dist/* /var/www/html'
				//sh 'pm2 restart all'
			}
		}
	}	   
post{
always {
  cleanWs()
}
}
}
