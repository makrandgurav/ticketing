# ticketing
npm i -g serverless
npm i -g typescript

serverless
npm init --y
sls plugin install --name serverless-offline
sls plugin install --name serverless-plugin-typescript
tsc --init
npm i --dev ts-node typescript
npm i aws-lambda
npm i --dev @types/aws-lambda

tsconfig 
{
  "compilerOptions": {
    "module": "CommonJS",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "target": "ES6",
    "resolveJsonModule": true,
    "noImplicitAny": true,
    "sourceMap": true,
    "moduleResolution": "node",
    "baseUrl": ".",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  },
  "include": ["app/**/*", "*.ts"],
  "exclude": ["node_modules"]
}

 npm i @middy/core@4.7.0
 npm i @middy/http-json-body-parser@4.7.0
 


