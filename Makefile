decrypt-all:
	cd backend && make decrypt
	cd frontend && make decrypt

encrypt-all:
	cd backend && make encrypt
	cd frontend && make encrypt

