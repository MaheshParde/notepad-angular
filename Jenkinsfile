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
				//sh "npm run build"
				sh "npm run build --prod"
				}
			}
      stage('Docker image build') {
            steps {
                sh 'docker build -t angular .'
                sh 'docker tag angular maheshparde/angular-repo:${BUILD_NUMBER}'
            }
        }

	}	   
post{
always {
  cleanWs()
}
}
}
