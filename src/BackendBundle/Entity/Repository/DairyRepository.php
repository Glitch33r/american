<?php

namespace BackendBundle\Entity\Repository;

use Doctrine\ORM\EntityRepository;

class DairyRepository extends EntityRepository
{
    public function getElements()
    {
        $q = $this->getEntityManager()
            ->createQuery('SELECT ls.title, ls.subTitle, ls.description, ls.image FROM BackendBundle\Entity\Dairy AS h JOIN BackendBundle\Entity\ProductContentBlock AS ls WITH h.id = ls.dairy')
            ->execute();

        return $q;
    }

    public function  getTitle()
    {
        $q = $this->createQueryBuilder('a')->select('a.title')->getQuery()->getArrayResult();
        return $q;
    }
}