VAULTPASS_FILE = ./../vaultpass
VAULT_FILE     = .env.enc
ENV_FILE       = .env

init:
	make decrypt
	yarn install

decrypt:
	@echo "🔓 Decrypting $(VAULT_FILE) into $(ENV_FILE)..."
	ansible-vault decrypt --output $(ENV_FILE) --vault-password-file $(VAULTPASS_FILE) $(VAULT_FILE)

encrypt:
	@echo "🔐 Encrypting $(ENV_FILE) into $(VAULT_FILE)..."
	ansible-vault encrypt --output $(VAULT_FILE) --vault-password-file $(VAULTPASS_FILE) $(ENV_FILE)
