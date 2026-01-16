# TechWave API
API REST privada desenvolvida exclusivamente para o projeto TechWave, responsável por fornecer toda a infraestrutura backend do e-commerce de tecnologia. A aplicação realiza autenticação de usuários via JWT, gerenciamento completo de produtos e controle de acesso baseado em roles (customer/admin), garantindo segurança e organização nas permissões do sistema.

## 🔗 Repositório do projeto: [TechWave](https://github.com/emicarolina/TechWave)

### ⚠️ API Privada
> Importante: Esta é uma API REST privada, hospedada na Vercel e utilizada exclusivamente pelo front-end do projeto. O repositório é público apenas para fins de portfólio e demonstração de código. As rotas sensíveis são protegidas por autenticação JWT e controle de permissões.

## Tecnologias Utilizadas
- JavaScript (Node.js)
- Express
- MongoDB com Mongoose
- JWT (jsonwebtoken)
- Bcrypt.js (criptografia de senhas)
- CORS
- Vercel - Deploy

## 🔒 Segurança e Autenticação
- Autenticação baseada em JWT
- Senhas armazenadas de forma segura com bcrypt
- Middleware de Proteção: Validação de tokens em rotas protegidas
- Controle de Permissões: Verificação de role (admin/customer)
- Validação de Dados: Mongoose schemas com validações
- CORS: Configurado para aceitar apenas origens autorizadas

## 📊 Modelos de Dados
### USER
```
{
  name: String,
  email: String (unique, lowercase),
  password: String (hashed, min 6 chars),
  role: "customer" | "admin",
  isActive: Boolean,
  timestamps: true
}
```

### PRODUCT
```
{
  name: String (max 100 chars),
  description: String (max 500 chars),
  price: Number (min 0),
  category: String,
  stock: Number (min 0),
  imageUrl: String,
  isActive: Boolean,
  timestamps: true
}
```

## 👩‍💻 Desenvolvido por Emilly
Se você chegou até aqui, obrigada por conferir o projeto! 🤍
