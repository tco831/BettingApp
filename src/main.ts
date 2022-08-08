import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Amplify } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

// Import these to load the 'Amplify' configuration file and connect 'Amplify' to the app
  
import 'zone.js';
import { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
  
Amplify.configure(awsconfig);
Auth.configure(awsconfig);
  
// Import ends here

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
