VAULTPASS_FILE = ./../vaultpass
VAULT_FILE = .env.enc
ENV_FILE   = .env

start-container:
	yarn install
	yarn ts-node-dev src/server.ts

init:
	yarn install
	make migrate

migrate:
	yarn prisma migrate dev

migration-create:
	@if [ -z "$(name)" ]; then \
		echo "❌ Please provide a name: make migration-create name=add_users_table"; \
		exit 1; \
	fi
	yarn prisma migrate dev --name $(name)

decrypt:
	@echo "🔓 Decrypting $(VAULT_FILE) into $(ENV_FILE)..."
	ansible-vault decrypt --output $(ENV_FILE) --vault-password-file $(VAULTPASS_FILE) $(VAULT_FILE)

encrypt:
	@echo "🔐 Encrypting $(ENV_FILE) into $(VAULT_FILE)..."
	ansible-vault encrypt --output $(VAULT_FILE) --vault-password-file $(VAULTPASS_FILE) $(ENV_FILE)
