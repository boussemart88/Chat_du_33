<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminChatController extends AbstractController
{
    /**
     * @Route("/admin/chat", name="admin_chat")
     */
    public function index(): Response
    {
        return $this->render('admin_chat/index.html.twig', [
            'controller_name' => 'AdminChatController',
        ]);
    }
}
