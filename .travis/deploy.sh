#!/bin/bash
eval "$(ssh-agent -s)" # Start ssh-agent cache
chmod 600 .travis/deploy_key # Allow read access to the private key
ssh-add .travis/deploy_key # Add the private key to SSH

# Execute the following commands through ssh
ssh -o "StrictHostKeyChecking=no" $SSH_USER@$SSH_IP -p $SSH_PORT <<EOF
  cd /home/retyp
  
  # Pull current version image
  docker pull retyp/front:current

  # Restart front
  docker-compose -f docker-compose.prod.yml stop retyp-front
  docker-compose -f docker-compose.prod.yml rm -f retyp-front
  docker-compose -f docker-compose.prod.yml up -d --no-deps --build retyp-front
  
  echo "Successfully deployed (${date + "%Y-%m-%d"})" >> /home/retyp/deployed.txt
EOF