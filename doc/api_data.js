define({ "api": [
  {
    "type": "delete",
    "url": "/api/cervejarias/:idCervejaria",
    "title": "Requisição exclusão de cadastro da cervejaria",
    "group": "Cervejarias",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token de autorização</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE",
          "content": "Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idCervejaria",
            "description": "<p>id da cervejaria a ser deletada - ID único</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "cervejaria",
            "description": "<p>Mensagem de exclusão</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso:",
          "content": "HTTP/1.1 200 OK\n {\n          message: \"Cervejaria deletada\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "erro",
            "description": "<p>Erro ao excluir cervejaria</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"erro\": \"Não foi possível efeturar a exclusão do cadastro da cervejaria\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/cervejariasRoute.js",
    "groupTitle": "Cervejarias",
    "name": "DeleteApiCervejariasIdcervejaria"
  },
  {
    "type": "get",
    "url": "/api/cervejarias",
    "title": "Requisição de lista completa de cervejarias cadastradas",
    "group": "Cervejarias",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token de autorização</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE",
          "content": "Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "cervejarias",
            "description": "<p>Cadastro completo da cervejaria</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso:",
          "content": "HTTP/1.1 200 OK\n {\n\"cervejarias\": [\n    {\n        \"_id\": \"5deed0308a02c44be455657a\",\n        \"nomeFantasia\": \"A Tutta Birra - Birrificio Artiginale\",\n        \"razaoSocial\": \"Eugenio Lorenzo Caputi Eireli\",\n        \"telefone\": 19981203354,\n        \"cnpj\": 123456789000101,\n        \"endereco\": [\n            {\n                \"_id\": \"5df2c3cdc0218f04c8849d68\",\n                \"numero\": 817,\n                \"bairro\": \"parque 1 de maio\",\n                \"cidade\": \"piracicaba\",\n                \"estado\": \"são paulo\",\n                \"cep\": 13425130\n            }\n        ],\n        \"createdAt\": \"2019-12-09T22:52:32.954Z\",\n        \"updatedAt\": \"2019-12-12T22:49:51.608Z\",\n        \"__v\": 0\n    }\n]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "erro",
            "description": "<p>Erro ao retornar lista de cervejarias cadastradas</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"erro\": \"Houve um erro ao retornar a lista de cervejarias\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/cervejariasRoute.js",
    "groupTitle": "Cervejarias",
    "name": "GetApiCervejarias"
  },
  {
    "type": "get",
    "url": "/api/cervejarias/logout",
    "title": "Rota para logout (limpeza dos Cookies de token de acesso) de cervejarias",
    "group": "Cervejarias",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "cervejaria",
            "description": "<p>Limpeza de cookies do token de acesso de cervejarias</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso:",
          "content": "   HTTP/1.1 200 OK\n{\n   \"message\": \"Deslogado com Sucesso!\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "erro",
            "description": "<p>Erro durante o processo de logout</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Erro",
          "content": "\n{\n  \"erro\": \"Ocoreu um erro durante o processo de logout\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/cervejariasAuthRoutes.js",
    "groupTitle": "Cervejarias",
    "name": "GetApiCervejariasLogout"
  },
  {
    "type": "post",
    "url": "/api/cervejarias",
    "title": "Requisição de cadastro completo de cervejarias",
    "group": "Cervejarias",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token de autorização</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE",
          "content": "Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "nomeFantasia",
            "description": "<p>Nome Fantasia da cervejaria</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "razaoSocial",
            "description": "<p>Razão social da cervejaria</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "telefone",
            "description": "<p>Número de telefone da cervejaria</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "cnpj",
            "description": "<p>Número do CNPJ da cervejaria</p>"
          },
          {
            "group": "Request Body",
            "type": "Object[]",
            "optional": false,
            "field": "endereco",
            "description": "<p>Informações de endereço da cervejaria</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "endereco.nomeRua",
            "description": "<p>Nome da rua em que fica localizada a cervejaria</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "endereco.numero",
            "description": "<p>Número do imóvel em que fica localizada a cervejaria</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "endereco.bairro",
            "description": "<p>Nome do bairro em que fica localizada a cervejaria</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "endereco.cidade",
            "description": "<p>Nome da cidade em que fica localizada a cervejaria</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "endereco.estado",
            "description": "<p>Estado em que fica localizada a cervejaria</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "endereco.cep",
            "description": "<p>Número do CEP da rua em que fica localizada a cervejaria</p>"
          },
          {
            "group": "Request Body",
            "type": "ObjectId",
            "optional": false,
            "field": "dadosLogin",
            "description": "<p>ID dos dados de login e senha cadastrados pela rota /api/cervejarias/registro (cervejariausuario)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "cervejaria",
            "description": "<p>Cadastro completo da cervejaria</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso:",
          "content": "    HTTP/1.1 201 CREATED\n    {\n    \"cervejaria\": {\n        \"_id\": \"5df3c1e94f68d02598570f0f\",\n        \"nomeFantasia\": \"A Tutta Birra - Birrificio Artiginale\",\n        \"razaoSocial\": \"Eugenio Lorenzo Caputi Eireli\",\n        \"telefone\": 19981203354,\n        \"cnpj\": 123456789000101,\n        \"endereco\": [\n            {\n                \"_id\": \"5df3c1e94f68d02598570f10\",\n                \"nomeRua\": \"Avenida Cassio Pascoal Padovani\",\n                \"numero\": 3197,\n                \"bairro\": \"Água Seca\",\n                \"cidade\": \"Piracicaba\",\n                \"estado\": \"São Paulo\",\n                \"cep\": 13425130\n            }\n        ],\n        \"dadosLogin\": \"5defbd9f70396e047c8e7686\",\n        \"createdAt\": \"2019-12-13T16:52:57.447Z\",\n        \"updatedAt\": \"2019-12-13T16:52:57.447Z\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "erro",
            "description": "<p>Erro ao salvar os dados da cervejaria</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"erro\": \"Houve um erro ao criar nova cervejaria, favor verifique os campos informados\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/cervejariasRoute.js",
    "groupTitle": "Cervejarias",
    "name": "PostApiCervejarias"
  },
  {
    "type": "post",
    "url": "/api/cervejarias/login",
    "title": "Rota para login (geração de token de acesso) de cervejarias",
    "group": "Cervejarias",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Endereço de email da cervejaria</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha para login da cervejaria</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "cervejaria",
            "description": "<p>Informações sobre o novo registro de login da cervejaria</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso:",
          "content": "   HTTP/1.1 200 OK\n{\n   \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE\",\n   \"cervejariaUsuario\": {\n       \"id\": \"5df2888f59d2a50af857e68d\",\n       \"email\": \"contato123@atuttabirra.com.br\"\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "erro",
            "description": "<p>Erro ao realizar o login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"erro\": \"Houve um erro durante o processo de login - verifique o email informado\"\n}",
          "type": "json"
        },
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"erro\": \"Senha incorreta\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/cervejariasAuthRoutes.js",
    "groupTitle": "Cervejarias",
    "name": "PostApiCervejariasLogin"
  },
  {
    "type": "post",
    "url": "/api/cervejarias/registro",
    "title": "Rota para registro de login e senha de cervejarias",
    "group": "Cervejarias",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Endereço de email da cervejaria</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha para login da cervejaria</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "cervejaria",
            "description": "<p>Informações sobre o novo registro de login da cervejaria</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso:",
          "content": "   HTTP/1.1 201 CREATED\n{\n   \"cervejariaUsuario\": {\n       \"_id\": \"5df3a54d21d60b1624f4b086\",\n       \"email\": \"contatovendas@atuttabirra.com.br\",\n       \"createdAt\": \"2019-12-13T14:50:53.916Z\",\n       \"updatedAt\": \"2019-12-13T14:50:53.916Z\",\n       \"__v\": 0\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "erro",
            "description": "<p>Erro ao salvar o usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"erro\": \"erro ao salvar o usuário\"\n}",
          "type": "json"
        },
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"erro\": \"email já cadastrado\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/cervejariasAuthRoutes.js",
    "groupTitle": "Cervejarias",
    "name": "PostApiCervejariasRegistro"
  },
  {
    "type": "put",
    "url": "/api/cervejarias/:idCervejaria",
    "title": "Requisição de alteração de dados de cadastro de cervejarias",
    "group": "Cervejarias",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token de autorização</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE",
          "content": "Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idCervejaria",
            "description": "<p>id da cervejaria ter cadastro alterado - ID único</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "nomeFantasia",
            "description": "<p>Nome Fantasia da cervejaria</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "razaoSocial",
            "description": "<p>Razão social da cervejaria</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "telefone",
            "description": "<p>Número de telefone da cervejaria</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "cnpj",
            "description": "<p>Número do CNPJ da cervejaria</p>"
          },
          {
            "group": "Request Body",
            "type": "Object[]",
            "optional": false,
            "field": "endereco",
            "description": "<p>Informações de endereço da cervejaria</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "endereco.nomeRua",
            "description": "<p>Nome da rua em que fica localizada a cervejaria</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "endereco.numero",
            "description": "<p>Número do imóvel em que fica localizada a cervejaria</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "endereco.bairro",
            "description": "<p>Nome do bairro em que fica localizada a cervejaria</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "endereco.cidade",
            "description": "<p>Nome da cidade em que fica localizada a cervejaria</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "endereco.estado",
            "description": "<p>Estado em que fica localizada a cervejaria</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "endereco.cep",
            "description": "<p>Número do CEP da rua em que fica localizada a cervejaria</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "cervejaria",
            "description": "<p>Mensagem de sucesso na alteração do cadastro</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso:",
          "content": "   HTTP/1.1 200 OK\n{\n   \"message\": \"Cadastro atualizado com sucesso!\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "erro",
            "description": "<p>Erro ao salvar os dados da cervejaria</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"erro\": \"Campos inválidos\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/cervejariasRoute.js",
    "groupTitle": "Cervejarias",
    "name": "PutApiCervejariasIdcervejaria"
  },
  {
    "type": "delete",
    "url": "/api/cervejas/:cervejaId",
    "title": "Requisição de exclusão de cadastro de determinada cerveja",
    "group": "Cervejas",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token de autorização</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE",
          "content": "Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cervejaId",
            "description": "<p>id da cerveja a ser deletado - ID único</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "cerveja",
            "description": "<p>Mensagem de exclusão</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso:",
          "content": "HTTP/1.1 200 OK\n {\n        mensagem: `Cerveja com o código ${cervejaId} foi deletada com sucesso`\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "erro",
            "description": "<p>Erro ao localizar o cadastro da cerveja a ser excluída</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"erro\": `Cerveja com o código ${cervejaId} não foi localizada`\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/cervejasRoutes.js",
    "groupTitle": "Cervejas",
    "name": "DeleteApiCervejasCervejaid"
  },
  {
    "type": "get",
    "url": "/api/cervejas/:cervejariaId",
    "title": "Requisição de lista completa de cervejas (produtos) de determinada cervejaria cadastrada",
    "group": "Cervejas",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token de autorização</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE",
          "content": "Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cervejariaId",
            "description": "<p>id da cervejaria - ID único</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "cervejas",
            "description": "<p>Lista de cervejas de determinada cervejaria</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso:",
          "content": "HTTP/1.1 200 OK\n [{\n        \"_id\": \"5df0232729882e4aa892d845\",\n        \"nome\": \"Caputi\",\n        \"estilo\": \"American Stadart Lager\",\n        \"escola\": \"Americana\",\n        \"teorAlcoolico\": 3.8,\n        \"embalagem\": \"Garrafa de vidro\",\n        \"volume\": 600,\n        \"quantidade\": 100,\n        \"preco\": 6,\n        \"cervejaria\": \"5deed0308a02c44be455657a\",\n        \"descricao\": \"A CAPUTI MUNICH HELLES é uma cerveja de baixa fermentação que tem sua origem na cidade de Munique na Alemanha. Possui coloração do amarelo intenso para dourado, tem aromas maltados e florais e apresenta sabor maltado bem equilibrado com o amargor. É produzida apenas com maltes e lúpulos alemães que confere uma excelente qualidade a cerveja, com 5,2% de teor alcoólico é uma cerveja leve e refrescante, excelente para o dia a dia.\\n\",\n        \"pasteurizada\": \"false\",\n        \"createdAt\": \"2019-12-10T22:58:47.985Z\",\n        \"updatedAt\": \"2019-12-10T22:58:47.985Z\",\n        \"__v\": 0\n    }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "erro",
            "description": "<p>Cervejaria não encontrada - O ID informado não retornou nenhuma cervejeria</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"erro\": \"Não localizamos nenhuma cervejaria com o ID informado\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/cervejasRoutes.js",
    "groupTitle": "Cervejas",
    "name": "GetApiCervejasCervejariaid"
  },
  {
    "type": "post",
    "url": "/api/cervejas/create/:cervejariaId",
    "title": "Requisição de cadastro de cerveja para determinada cervejaria",
    "group": "Cervejas",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token de autorização</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE",
          "content": "Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cervejariaId",
            "description": "<p>id da cervejaria - ID único</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome Comercial da cerveja</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "estilo",
            "description": "<p>Estilo em qual a cerveja de enquadra de acordo com o guia de estilo do Brewers Judge Certification Programme - BJCP</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "escola",
            "description": "<p>Escola cervejeira em qual a cerveja se enquadra, podendo ser: Americana, Belga, Alemã ou Inglesa</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "teorAlcoolico",
            "description": "<p>Teor Alcoólico da cerveja em ABV%(Alcohol by Volume %)</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "embalagem",
            "description": "<p>Tipo de embalagem da cerveja. Podendo ser: garrafa de vidro, lata, garrafa pet, barril de inox retornável ou keg descartável.</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "volume",
            "description": "<p>Volume do recipiente em que a cerveja está condicionada. Por exemplo: 330, 1000, 30000</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "quantidade",
            "description": "<p>Quantidade do produto em embalagem em questão no estoque</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "preco",
            "description": "<p>Preço da unidade</p>"
          },
          {
            "group": "Request Body",
            "type": "ObjectId",
            "optional": false,
            "field": "cervejaria",
            "description": "<p>ID do cadastro da cervejaria em questão - Deve ser o mesmo do informado na rota</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "descricao",
            "description": "<p>Breve descrição da cerveja</p>"
          },
          {
            "group": "Request Body",
            "type": "Boolean",
            "optional": false,
            "field": "pasteurizada",
            "description": "<p>Informação se a cerveja é pasteurizada ou não</p>"
          },
          {
            "group": "Request Body",
            "type": "Buffer",
            "optional": false,
            "field": "foto",
            "description": "<p>Imagem ilustrativa da cerveja</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "cerveja",
            "description": "<p>Cadastro completo da cerveja</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso:",
          "content": "    HTTP/1.1 201 CREATED\n   {\n    \"_id\": \"5df3d71559091026806b2233\",\n    \"nome\": \"Caputi\",\n    \"estilo\": \"American Stadart Lager\",\n    \"escola\": \"Americana\",\n    \"teorAlcoolico\": 3.8,\n    \"embalagem\": \"Garrafa de vidro\",\n    \"volume\": 600,\n    \"quantidade\": 100,\n    \"preco\": 6,\n    \"cervejaria\": \"5deed0308a02c44be455657a\",\n    \"descricao\": \"A CAPUTI MUNICH HELLES é uma cerveja de baixa fermentação que tem sua origem na cidade de Munique na Alemanha. Possui coloração do amarelo intenso para dourado, tem aromas maltados e florais e apresenta sabor maltado bem equilibrado com o amargor. É produzida apenas com maltes e lúpulos alemães que confere uma excelente qualidade a cerveja, com 5,2% de teor alcoólico é uma cerveja leve e refrescante, excelente para o dia a dia.\\n\",\n    \"pasteurizada\": \"false\",\n    \"createdAt\": \"2019-12-13T18:23:17.592Z\",\n    \"updatedAt\": \"2019-12-13T18:23:17.592Z\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "erro",
            "description": "<p>Erro ao salvar a imagem ilustrativa da cerveja</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"erro\": \"Não foi possível fazer upload da imagem\"\n}",
          "type": "json"
        },
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"erro\": \"A imagem não deve ter mais que 1mb\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/cervejasRoutes.js",
    "groupTitle": "Cervejas",
    "name": "PostApiCervejasCreateCervejariaid"
  },
  {
    "type": "put",
    "url": "/api/cervejas/:cervejaId",
    "title": "Requisição de alteração de cadastro de cerveja para determinada cervejaria",
    "group": "Cervejas",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token de autorização</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE",
          "content": "Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cervejaId",
            "description": "<p>id da cerveja - ID único</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome Comercial da cerveja</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "estilo",
            "description": "<p>Estilo em qual a cerveja de enquadra de acordo com o guia de estilo do Brewers Judge Certification Programme - BJCP</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "escola",
            "description": "<p>Escola cervejeira em qual a cerveja se enquadra, podendo ser: Americana, Belga, Alemã ou Inglesa</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "teorAlcoolico",
            "description": "<p>Teor Alcoólico da cerveja em ABV%(Alcohol by Volume %)</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "embalagem",
            "description": "<p>Tipo de embalagem da cerveja. Podendo ser: garrafa de vidro, lata, garrafa pet, barril de inox retornável ou keg descartável.</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "volume",
            "description": "<p>Volume do recipiente em que a cerveja está condicionada. Por exemplo: 330, 1000, 30000</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "quantidade",
            "description": "<p>Quantidade do produto em embalagem em questão no estoque</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "preco",
            "description": "<p>Preço da unidade</p>"
          },
          {
            "group": "Request Body",
            "type": "ObjectId",
            "optional": false,
            "field": "cervejaria",
            "description": "<p>ID do cadastro da cervejaria em questão - Deve ser o mesmo do informado na rota</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "descricao",
            "description": "<p>Breve descrição da cerveja</p>"
          },
          {
            "group": "Request Body",
            "type": "Boolean",
            "optional": false,
            "field": "pasteurizada",
            "description": "<p>Informação se a cerveja é pasteurizada ou não</p>"
          },
          {
            "group": "Request Body",
            "type": "Buffer",
            "optional": false,
            "field": "foto",
            "description": "<p>Imagem ilustrativa da cerveja</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "cerveja",
            "description": "<p>Cadastro completo da cerveja</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso:",
          "content": "   HTTP/1.1 200 OK\n{\n   \"mensagem\": \"Produto atualizado com sucesso!\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "erro",
            "description": "<p>Erro ao salvar os dados da cerveja</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"erro\": \"Campos inválidos\"\n}",
          "type": "json"
        },
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"erro\": \"Houve um erro ao localizar a cerveja, por favor tente novamente\"\n}",
          "type": "json"
        },
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"erro\": `Cerveja com o código ${cervejaId} não foi localizada`\n}",
          "type": "json"
        },
        {
          "title": "Erro",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"erro\": err\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/cervejasRoutes.js",
    "groupTitle": "Cervejas",
    "name": "PutApiCervejasCervejaid"
  },
  {
    "type": "delete",
    "url": "/api/distribuidores/:idDistribuidor",
    "title": "Requisição exclusão de cadastro do distribuidor",
    "group": "Distribuidores",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token de autorização</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE",
          "content": "Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idDistribuidor",
            "description": "<p>id do distribuidor a ser deletado - ID único</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "distribuidor",
            "description": "<p>Mensagem de exclusão</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso:",
          "content": "HTTP/1.1 200 OK\n {\n          message: \"Distribuidor deletado\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "erro",
            "description": "<p>Erro ao excluir distribuidor</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"erro\": \"Não foi possível efeturar a exclusão do cadastro do distribuidor\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/distribuidoresRoute.js",
    "groupTitle": "Distribuidores",
    "name": "DeleteApiDistribuidoresIddistribuidor"
  },
  {
    "type": "get",
    "url": "/api/distribuidores",
    "title": "Requisição de lista completa de distribuidores cadastradas",
    "group": "Distribuidores",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token de autorização</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE",
          "content": "Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "distribuidor",
            "description": "<p>Cadastro completo do distribuidor</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso:",
          "content": "    HTTP/1.1 200 OK\n     {\n    {\n    \"distribuidores\": [\n        {\n            \"_id\": \"5deed1488a02c44be455657c\",\n            \"nomeFantasia\": \"LogBrew\",\n            \"razaoSocial\": \"logBrew Distribuidora Ltda\",\n            \"endereco\": [\n                {\n                    \"_id\": \"5deed1488a02c44be455657d\",\n                    \"nomeRua\": \"Rua Leogildo Salvagni\",\n                    \"numero\": 816,\n                    \"bairro\": \"Parque Primeiro de Maio\",\n                    \"cidade\": \"Piracicaba\",\n                    \"cep\": 13425130\n                }\n            ],\n            \"telefone\": 19981203354,\n            \"cnpj\": 123456789000110,\n            \"camaraFria\": true,\n            \"caminhaoRefrigerado\": true,\n            \"createdAt\": \"2019-12-09T22:57:12.284Z\",\n            \"updatedAt\": \"2019-12-09T22:57:12.284Z\",\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "erro",
            "description": "<p>Erro ao retornar lista de distribuidores cadastrados</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"erro\": \"Houve um erro ao retornar a lista de distribuidores\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/distribuidoresRoute.js",
    "groupTitle": "Distribuidores",
    "name": "GetApiDistribuidores"
  },
  {
    "type": "get",
    "url": "/api/distribuidores/logout",
    "title": "Rota para logout (limpeza dos Cookies de token de acesso) de distribuidores",
    "group": "Distribuidores",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "distribuidor",
            "description": "<p>Limpeza de cookies do token de acesso de distribuidor</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso:",
          "content": "   HTTP/1.1 200 OK\n{\n   \"message\": \"Deslogado com Sucesso!\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "erro",
            "description": "<p>Erro durante o processo de logout</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Erro",
          "content": "\n{\n  \"erro\": \"Ocoreu um erro durante o processo de logout\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/distribuidoresAuthRoutes.js",
    "groupTitle": "Distribuidores",
    "name": "GetApiDistribuidoresLogout"
  },
  {
    "type": "post",
    "url": "/api/distribuidores",
    "title": "Requisição de cadastro completo de distribuidores",
    "group": "Distribuidores",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token de autorização</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE",
          "content": "Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "nomeFantasia",
            "description": "<p>Nome Fantasia do distribuidor</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "razaoSocial",
            "description": "<p>Razão social do distribuidor</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "telefone",
            "description": "<p>Número de telefone do distribuidor</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "cnpj",
            "description": "<p>Número do CNPJ do distribuidor</p>"
          },
          {
            "group": "Request Body",
            "type": "Object[]",
            "optional": false,
            "field": "endereco",
            "description": "<p>Informações de endereço do distribuidor</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "endereco.nomeRua",
            "description": "<p>Nome da rua em que fica localizada o distribuidor</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "endereco.numero",
            "description": "<p>Número do imóvel em que fica localizada o distribuidor</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "endereco.bairro",
            "description": "<p>Nome do bairro em que fica localizada o distribuidor</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "endereco.cidade",
            "description": "<p>Nome da cidade em que fica localizada o distribuidor</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "endereco.estado",
            "description": "<p>Estado em que fica localizada o distribuidor</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "endereco.cep",
            "description": "<p>Número do CEP da rua em que fica localizada o distribuidor</p>"
          },
          {
            "group": "Request Body",
            "type": "Boolean",
            "optional": false,
            "field": "camaraFria",
            "description": "<p>Informação se o distribuidor dispõe de câmara fria própria</p>"
          },
          {
            "group": "Request Body",
            "type": "Boolean",
            "optional": false,
            "field": "caminhaoRefrigerado",
            "description": "<p>Informação se o distribuidor dispõe de cadeira de distribuição refrigerada</p>"
          },
          {
            "group": "Request Body",
            "type": "Boolean",
            "optional": false,
            "field": "equipeComercial",
            "description": "<p>Informação se o distribuidor dispõe de equipe comercial</p>"
          },
          {
            "group": "Request Body",
            "type": "Boolean",
            "optional": false,
            "field": "sommelier",
            "description": "<p>Informação se o distribuidor dispõe de sommelier profissional</p>"
          },
          {
            "group": "Request Body",
            "type": "ObjectId",
            "optional": false,
            "field": "dadosLogin",
            "description": "<p>ID dos dados de login e senha cadastrados pela rota /api/distribuidores/registro (distribuidorusuario)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "distribuidor",
            "description": "<p>Cadastro completo do distribuidor</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso:",
          "content": "    HTTP/1.1 201 CREATED\n    {\n    \"distribuidor\": {\n        \"_id\": \"5df3c996287bab139450a0e9\",\n        \"nomeFantasia\": \"LogBrew\",\n        \"razaoSocial\": \"logBrew Distribuidora Ltda\",\n        \"endereco\": [\n            {\n                \"_id\": \"5df3c996287bab139450a0ea\",\n                \"nomeRua\": \"Rua Leogildo Salvagni\",\n                \"numero\": 816,\n                \"bairro\": \"Parque Primeiro de Maio\",\n                \"cidade\": \"Piracicaba\",\n                \"cep\": 13425130\n            }\n        ],\n        \"telefone\": 19981203354,\n        \"cnpj\": 123456789000110,\n        \"camaraFria\": true,\n        \"caminhaoRefrigerado\": true,\n        \"equipeComercial\": true,\n        \"sommelier\": false,\n        \"dadosLogin\": \"5defd446f9ac9d13cc75008c\",\n        \"createdAt\": \"2019-12-13T17:25:42.979Z\",\n        \"updatedAt\": \"2019-12-13T17:25:42.979Z\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "erro",
            "description": "<p>Erro ao salvar os dados do distribuidor</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"erro\": \"Houve um erro ao criar novo distribuidor, favor verifique os campos informados\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/distribuidoresRoute.js",
    "groupTitle": "Distribuidores",
    "name": "PostApiDistribuidores"
  },
  {
    "type": "post",
    "url": "/api/distribuidores/login",
    "title": "Rota para login (geração de token de acesso) de distribuidores",
    "group": "Distribuidores",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Endereço de email do distribuidor</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha para login do distribuidor</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "distribuidor",
            "description": "<p>Informações sobre o novo registro de login do distribuidor</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso:",
          "content": "   HTTP/1.1 200 OK\n{\n   \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGVmZDQ0NmY5YWM5ZDEzY2M3NTAwOGMiLCJpYXQiOjE1NzYyNTM0NDJ9.sdXLFKTqMsWQTeZ_79ga8VVfOhqk7NJ20py1Mq0Kb2s\",\n   \"distribuidorUsuario\": \"5defd446f9ac9d13cc75008c\",\n   \"email\": \"vendas1@logbrew.com.br\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "erro",
            "description": "<p>Erro ao realizar o login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"erro\": \"Houve um erro durante o processo de login - verifique o email informado\"\n}",
          "type": "json"
        },
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"erro\": \"Senha incorreta\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/distribuidoresAuthRoutes.js",
    "groupTitle": "Distribuidores",
    "name": "PostApiDistribuidoresLogin"
  },
  {
    "type": "post",
    "url": "/api/distribuidores/registro",
    "title": "Rota para registro de login e senha de distribuidores",
    "group": "Distribuidores",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Endereço de email do distribuidor</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha para login do distribuidor</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "distribuidor",
            "description": "<p>Informações sobre o novo registro de login do distribuidor</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso:",
          "content": "    HTTP/1.1 201 CREATED\n {\n    \"distribuidorUsuario\": {\n        \"_id\": \"5df3b77db64d401cb4a1ee39\",\n        \"email\": \"vendas123@logbrew.com.br\",\n        \"createdAt\": \"2019-12-13T16:08:29.964Z\",\n        \"updatedAt\": \"2019-12-13T16:08:29.964Z\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "erro",
            "description": "<p>Erro ao salvar o usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"erro\": \"erro ao salvar o usuário\"\n}",
          "type": "json"
        },
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"erro\": \"email já cadastrado\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/distribuidoresAuthRoutes.js",
    "groupTitle": "Distribuidores",
    "name": "PostApiDistribuidoresRegistro"
  },
  {
    "type": "put",
    "url": "/api/distribuidores/:idDistribuidor",
    "title": "Requisição de alteração de dados de cadastro de distribuidores",
    "group": "Distribuidores",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token de autorização</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE",
          "content": "Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idDistribuidor",
            "description": "<p>id do distribuidor ter cadastro alterado - ID único</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "nomeFantasia",
            "description": "<p>Nome Fantasia do distribuidor</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "razaoSocial",
            "description": "<p>Razão social do distribuidor</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "telefone",
            "description": "<p>Número de telefone do distribuidor</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "cnpj",
            "description": "<p>Número do CNPJ do distribuidor</p>"
          },
          {
            "group": "Request Body",
            "type": "Object[]",
            "optional": false,
            "field": "endereco",
            "description": "<p>Informações de endereço do distribuidor</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "endereco.nomeRua",
            "description": "<p>Nome da rua em que fica localizada o distribuidor</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "endereco.numero",
            "description": "<p>Número do imóvel em que fica localizada o distribuidor</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "endereco.bairro",
            "description": "<p>Nome do bairro em que fica localizada o distribuidor</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "endereco.cidade",
            "description": "<p>Nome da cidade em que fica localizada o distribuidor</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "endereco.estado",
            "description": "<p>Estado em que fica localizada o distribuidor</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "endereco.cep",
            "description": "<p>Número do CEP da rua em que fica localizada o distribuidor</p>"
          },
          {
            "group": "Request Body",
            "type": "Boolean",
            "optional": false,
            "field": "camaraFria",
            "description": "<p>Informação se o distribuidor dispõe de câmara fria própria</p>"
          },
          {
            "group": "Request Body",
            "type": "Boolean",
            "optional": false,
            "field": "caminhaoRefrigerado",
            "description": "<p>Informação se o distribuidor dispõe de cadeira de distribuição refrigerada</p>"
          },
          {
            "group": "Request Body",
            "type": "Boolean",
            "optional": false,
            "field": "equipeComercial",
            "description": "<p>Informação se o distribuidor dispõe de equipe comercial</p>"
          },
          {
            "group": "Request Body",
            "type": "Boolean",
            "optional": false,
            "field": "sommelier",
            "description": "<p>Informação se o distribuidor dispõe de sommelier profissional</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "distribuidor",
            "description": "<p>Mensagem de sucesso na alteração do cadastro</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso:",
          "content": "   HTTP/1.1 200 OK\n{\n   \"message\": \"Cadastro atualizado com sucesso!\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "erro",
            "description": "<p>Erro ao salvar os dados do distribuidor</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"erro\": \"Campos inválidos\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/distribuidoresRoute.js",
    "groupTitle": "Distribuidores",
    "name": "PutApiDistribuidoresIddistribuidor"
  }
] });
