const Tokens = require('csrf');

const tokens = new Tokens();
// 创建密钥，异步生成的方式：tokens.secret(callback)
const csrfSecret = tokens.secretSync();
// 创建令牌
const some_user_token = tokens.create(csrfSecret);

// 验证令牌
if (!tokens.verify(csrfSecret, some_user_token)) {
  throw new Error('invalid token!')
} else {
  console.log('验证通过');
}