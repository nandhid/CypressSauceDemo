pipeline {
  agent any

  environment {
    CYPRESS_CACHE_FOLDER = "${WORKSPACE}/.cache/Cypress"
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/nandhid/CypressSauceDemo.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Run Cypress Tests') {
      steps {
        sh 'npm run test'
      }
    }

    stage('Generate Mochawesome Report') {
      steps {
        sh 'npm run report'
      }
    }

    stage('Publish HTML Report') {
      steps {
        publishHTML(target: [
          allowMissing: false,
          alwaysLinkToLastBuild: true,
          keepAll: true,
          reportDir: 'cypress/reports/html',
          reportFiles: 'index.html',
          reportName: 'Mochawesome Report'
        ])
      }
    }

    stage('Generate Allure Report') {
      steps {
        sh 'npm run allure:generate'
      }
    }

    stage('Publish Allure Report') {
      steps {
        allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: '**/reports/**', fingerprint: true
    }
  }
}
