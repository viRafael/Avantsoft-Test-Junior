import { plainToInstance } from 'class-transformer';
import { IsNumber, IsString, validateSync } from 'class-validator';
import dotenv from 'dotenv';

dotenv.config();

class EnvironmentVariables {
  @IsNumber()
  PORT: number;

  @IsString()
  DATABASE_URL: string;
}

const envVars = plainToInstance(EnvironmentVariables, {
  PORT: Number(process.env.PORT),
  DATABASE_URL: process.env.DATABASE_URL,
});

const errors = validateSync(envVars, {
  skipMissingProperties: false,
});

if (errors.length > 0) {
  console.error('Erro nas variáveis de ambiente:', errors);
  process.exit(1);
}

export const env = envVars;
