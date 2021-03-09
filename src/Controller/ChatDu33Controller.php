<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ChatDu33Controller extends AbstractController
{
    /**
     * @Route("/", name="chat_du33")
     */
    public function index(): Response
    {
        return $this->render('chat_du33/index.html.twig');
    }
}
