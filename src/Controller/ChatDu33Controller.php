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

    /**
     * @Route("/chat_a_adopter", name="chat a adopter")
     */
    public function adopter(): Response
    {
        return $this->render('chat_du33/chat_a_adopter.html.twig');
    }

    /**
     * @Route("/chat_adopter", name="chat adopter")
     */
    public function déjaAdopter(): Response
    {
        return $this->render('chat_du33/chat_adopter.html.twig');
    }

    /**
     * @Route("/contact", name="contact")
     */
    public function contact(): Response
    {
        return $this->render('chat_du33/contact.html.twig');
    }
}
