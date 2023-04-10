<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ArticleController extends AbstractController
{
    #[Route('/article-sante', name: 'article_sante')]
    public function sante(): Response
    {
        return $this->render('article/sante.html.twig');
    }

    #[Route('/article-education', name: 'article_education')]
    public function education(): Response
    {
        return $this->render('article/education.html.twig');
    }

    #[Route('/article-agriculture', name: 'article_agriculture')]
    public function agriculture(): Response
    {
        return $this->render('article/agriculture.html.twig');
    }

    #[Route('/article-destine', name: 'article_destine')]
    public function destine(): Response
    {
        return $this->render('article/destine.html.twig');
    }

    #[Route('/article-activites', name: 'article_activites')]
    public function activites(): Response
    {
        return $this->render('article/activites.html.twig');
    }
}
