import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getServices } from '@sap/xsenv';
import * as passport from 'passport';
const { JWTStrategy } = require('@sap/xssec').v3;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // Retrieve the UAA service details
    const uaaService = getServices({ uaa: { tag: 'xsuaa' } }).uaa;

    // Register the JWTStrategy with passport
    passport.use(new JWTStrategy(uaaService));

    // Initialize passport middleware
    app.use(passport.initialize());

    // Apply JWT authentication middleware to all routes
    app.use(passport.authenticate('JWT', { session: false }));

    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
