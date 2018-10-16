<?php

namespace BackendBundle\Entity\Repository;

use Doctrine\ORM\EntityRepository;

class HomePageRepository extends EntityRepository
{
    public function getRedBlock()
    {
        $q = $this->createQueryBuilder('a')
            ->select('a.first_blc_title, a.first_blc_sub_title, a.first_blc_description, a.image')
            ->getQuery()->getResult();

        return $q;
    }

    public function getParalaxBlock()
    {
        $q = $this->createQueryBuilder('a')
            ->select('a.paralax_blc_title, a.paralax_blc_sub_title, a.paralax_blc_description')
            ->getQuery()->getResult();

        return $q;
    }

    public function getBlackBlock()
    {
        $q = $this->createQueryBuilder('a')
            ->select('a.second_blc_title, a.second_blc_sub_title, a.second_blc_description')
            ->getQuery()->getResult();

        return $q;
    }

    public function getListBlock()
    {
        $q = $this->getEntityManager()
            ->createQuery('SELECT h.listName, ls.title FROM BackendBundle\Entity\HomePage AS h JOIN BackendBundle\Entity\ListItem AS ls WITH h.id = ls.homepage')
            ->execute();

        return $q;
    }
}