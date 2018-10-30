<?php

namespace BackendBundle\Entity\Repository;

use Doctrine\ORM\EntityRepository;

class CorporatePhilosophyRepository extends EntityRepository
{
    public function getWhiteBlock()
    {
        $q = $this->createQueryBuilder('a')
            ->select('a.first_blc_title, a.first_blc_sub_title, a.first_blc_description, a.image')
            ->getQuery()->getResult();

        return $q;
    }

    public function getRedBlock()
    {
        $q = $this->createQueryBuilder('a')
            ->select('a.second_blc_title, a.second_blc_sub_title, a.second_blc_description')
            ->getQuery()->getResult();

        return $q;
    }

    public function getListBlock()
    {
        $q = $this->getEntityManager()
            ->createQuery('SELECT cp.listName FROM BackendBundle\Entity\CorporatePhilosophy AS cp')
            ->execute();

        return $q;
    }

    public function getListItemBlock()
    {
        $q = $this->getEntityManager()
            ->createQuery('SELECT ls.title FROM BackendBundle\Entity\CorporatePhilosophy AS cp JOIN BackendBundle\Entity\ListItem AS ls WITH cp.id = ls.corpphilos')
            ->execute();

        return $q;
    }
}